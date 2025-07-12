require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const axios = require('axios');
const rvttiData = require('./rvtti-data');

const app = express();
const port = process.env.PORT || 3004;

// Cloud AI service configuration
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'https://api.openai.com/v1/chat/completions';
const AI_API_KEY = process.env.AI_API_KEY || 'demo-key';

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "https://cdn-icons-png.flaticon.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    },
  },
}));

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Input validation middleware
const validateChatInput = [
  body('message')
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage('Message must be between 1 and 1000 characters')
    .escape()
    .withMessage('Message contains invalid characters'),
];

// Helper function to create context
function createContext() {
  return `You are RVTTI AI assistant. Keep responses brief and helpful.

  RVTTI: Rift Valley Technical Training Institute, Eldoret, Kenya
  Contact: ${rvttiData.contact.phone}, ${rvttiData.contact.email}
  Website: ${rvttiData.website}

  Courses: Engineering (3y), Business (2y), ICT (2y), Hospitality (2y)
  Requirements: KCSE C- minimum
  Fees: KES 25,000/semester tuition, KES 5,000 registration
  Apply: ${rvttiData.website}/apply, KES 1,000 fee

  Be concise and direct.`;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'RVTTI Chatbot API'
  });
});

// API endpoint for chat with improved error handling
app.post('/api/chat', validateChatInput, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid input', 
        details: errors.array() 
      });
    }

    const userMessage = req.body.message;
    console.log('Received message:', userMessage);

    // Check if AI service is configured
    if (!AI_API_KEY || AI_API_KEY === 'demo-key') {
      return res.status(503).json({ 
        error: 'AI service not configured. Please set AI_API_KEY environment variable.' 
      });
    }

    const context = createContext();
    
    console.log('Sending request to Ollama...');

    // Use cloud AI service instead of Ollama
    const aiResponse = await axios.post(AI_SERVICE_URL, {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: context },
        { role: 'user', content: userMessage }
      ],
      max_tokens: 150,
      temperature: 0.3
    }, {
      headers: {
        'Authorization': `Bearer ${AI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 15000
    });

    if (!aiResponse.data || !aiResponse.data.choices || !aiResponse.data.choices[0]) {
      throw new Error('Invalid response from AI service');
    }

    const reply = aiResponse.data.choices[0].message.content;
    console.log('Successfully received response from AI service');
    res.json({ 
      reply: reply,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in chat endpoint:', error.message);
    
    // Handle specific AI service errors
    if (error.response && error.response.status === 401) {
      return res.status(503).json({ 
        error: 'AI service authentication failed. Please check API key.' 
      });
    }
    
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return res.status(503).json({ 
        error: 'AI service is currently unavailable. Please try again later.' 
      });
    }
    
    if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
      return res.status(408).json({ 
        error: 'Request timed out. Please try again.' 
      });
    }

    // Generic error response
    res.status(500).json({ 
      error: 'An error occurred while processing your request. Please try again.' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ 
      error: 'API endpoint not found' 
    });
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

app.listen(port, () => {
  console.log(`🚀 RVTTI Chatbot server running on port ${port}`);
  console.log(`📊 Health check available at /api/health`);
  console.log(`🤖 Using cloud AI service: ${AI_SERVICE_URL.includes('openai') ? 'OpenAI' : 'Custom AI Service'}`);
});
