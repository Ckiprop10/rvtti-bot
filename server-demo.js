require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const rvttiData = require('./rvtti-data');

const app = express();
const port = process.env.PORT || 3004;

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

// Simple AI responses for demo
function getDemoResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes('course') || message.includes('program')) {
    return "RVTTI offers courses in Engineering (3 years), Business (2 years), ICT (2 years), and Hospitality (2 years). All require KCSE C- minimum.";
  }
  
  if (message.includes('fee') || message.includes('cost') || message.includes('price')) {
    return "Tuition fees are KES 25,000 per semester, plus KES 5,000 registration fee. Application fee is KES 1,000.";
  }
  
  if (message.includes('apply') || message.includes('admission')) {
    return "To apply, visit " + rvttiData.website + "/apply. You need KCSE C- minimum and KES 1,000 application fee.";
  }
  
  if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
    return "Contact RVTTI at " + rvttiData.contact.phone + " or " + rvttiData.contact.email + ". Visit " + rvttiData.website + " for more info.";
  }
  
  if (message.includes('requirement') || message.includes('entry')) {
    return "Entry requirement is KCSE C- minimum. Mature entry available for 25+ years with work experience.";
  }
  
  return "Hello! I'm the RVTTI AI Assistant. I can help you with information about courses, fees, admissions, and contact details. What would you like to know?";
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'RVTTI Chatbot API (Demo Mode)'
  });
});

// API endpoint for chat with demo responses
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

    // Get demo response
    const reply = getDemoResponse(userMessage);
    
    console.log('Sending demo response');
    res.json({ 
      reply: reply,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in chat endpoint:', error.message);
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
  console.log(`🚀 RVTTI Chatbot server running on port ${port} (DEMO MODE)`);
  console.log(`📊 Health check available at /api/health`);
  console.log(`🤖 Using demo responses - no external AI service required`);
}); 