# RVTTI AI Chatbot

An intelligent AI chatbot for Rift Valley Technical Training Institute (RVTTI) that provides comprehensive information about admissions, courses, fees, student services, and all institutional details.

## Features

- 🤖 AI-powered responses using Ollama
- 🎤 Voice input support
- 📱 Responsive design
- 🔒 Security features (rate limiting, input validation)
- ⚡ Real-time typing indicators
- 🛡️ Error handling and user feedback
- 📊 Health check endpoint

## Prerequisites

- Node.js (v14 or higher)
- Ollama installed and running locally (for local AI)
- OR OpenAI API key (for cloud AI service)
- A compatible AI model (default: gemma:2b for Ollama)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rvtti-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   
   **For local Ollama:**
   ```env
   PORT=3004
   OLLAMA_HOST=http://localhost:11434
   OLLAMA_MODEL=gemma:2b
   NODE_ENV=development
   ```
   
   **For cloud AI service (OpenAI):**
   ```env
   PORT=3004
   AI_SERVICE_URL=https://api.openai.com/v1/chat/completions
   AI_API_KEY=your_openai_api_key_here
   NODE_ENV=development
   ```

4. **Start AI service**
   
   **For local Ollama:**
   Make sure Ollama is running and you have the required model:
   ```bash
   ollama serve
   ollama pull gemma:2b
   ```
   
   **For cloud AI service:**
   No additional setup required - just ensure your API key is valid.

5. **Start the application**
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3004`
2. Type your question or use the voice input feature
3. The AI assistant will respond with relevant information about RVTTC

## API Endpoints

- `POST /api/chat` - Send a message to the chatbot
- `GET /api/health` - Health check endpoint

## Security Features

- **Helmet.js**: Security headers
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Sanitized and validated user input
- **CORS**: Cross-origin resource sharing protection
- **Content Security Policy**: XSS protection

## Project Structure

```
rvtti-chatbot/
├── server.js          # Express server with API endpoints
├── rvtti-data.js      # Comprehensive institution data and information
├── public/
│   └── index.html     # Frontend interface
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 3004 | Server port |
| `OLLAMA_HOST` | http://localhost:11434 | Ollama server URL (for local AI) |
| `OLLAMA_MODEL` | gemma:2b | AI model to use (for local AI) |
| `AI_SERVICE_URL` | https://api.openai.com/v1/chat/completions | Cloud AI service URL |
| `AI_API_KEY` | demo-key | Cloud AI service API key |
| `NODE_ENV` | development | Environment mode |

### Customizing Institution Data

Edit `rvtti-data.js` to update:
- Institution name and details
- Contact information
- Course offerings and departments
- Fee structures and payment methods
- Student services and accommodation
- Library services
- Career services
- Transportation information
- Emergency contacts

## Troubleshooting

### Common Issues

1. **AI service connection failed**
   - **For Ollama**: Ensure Ollama is running: `ollama serve`
   - **For Ollama**: Check if the model is installed: `ollama list`
   - **For Ollama**: Verify the host URL in your `.env` file
   - **For cloud AI**: Verify your API key is valid and has sufficient credits

2. **Port already in use**
   - Change the PORT in your `.env` file
   - Or kill the process using the port

3. **Voice input not working**
   - Ensure you're using HTTPS or localhost
   - Check browser permissions for microphone access

### Error Messages

- **"AI service temporarily unavailable"**: AI service is not running or unreachable
- **"AI service authentication failed"**: Invalid API key for cloud AI service
- **"Request timed out"**: The AI model is taking too long to respond
- **"Too many requests"**: Rate limit exceeded, wait 15 minutes

## Development

### Adding New Features

1. **New API endpoints**: Add routes in `server.js`
2. **UI improvements**: Modify `public/index.html`
3. **Data updates**: Edit `rvttc-data.js`

### Testing

Test the API endpoints:
```bash
# Health check
curl http://localhost:3004/api/health

# Send a message
curl -X POST http://localhost:3004/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What courses do you offer?"}'
```

## Deployment

### Render (Recommended)

1. **Connect your GitHub repository to Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" and select "Web Service"
   - Connect your GitHub account and select this repository

2. **Configure the deployment**
   - **Name**: `rvtti-chatbot` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better performance)

3. **Set environment variables**
   - `AI_API_KEY`: Your OpenAI API key
   - `AI_SERVICE_URL`: `https://api.openai.com/v1/chat/completions`
   - `NODE_ENV`: `production`

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy your application

### Other Platforms

The application can also be deployed to:
- **Heroku**: Use the same build and start commands
- **Vercel**: Configure as a Node.js application
- **Railway**: Connect GitHub repository and set environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For technical support or questions about RVTTI, please contact:
- Email: info@rvtti.ac.ke
- Phone: +254-XXX-XXXXXX
- Website: rvtti.ac.ke 