# 🔐 BNS OTP King

Official repository for BNS OTP King project - Built with Next.js and Python Framework.

## 🚀 Features

- **Next.js Frontend** - React-based modern UI
- **Python Backend** - FastAPI for API endpoints
- **Vercel Deployment** - Serverless deployment ready
- **API Routes** - Built-in API handler support

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Python 3.8+ (for local development)
- Vercel account

## 🔧 Local Development Setup

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/babarwakas22280-max/bns-otpking.git
cd bns-otpking
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Environment Setup
\`\`\`bash
cp .env.example .env.local
\`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚢 Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
\`\`\`

### Option 2: GitHub Integration (Automatic)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Next.js" as framework
5. Add environment variables if needed
6. Click "Deploy"

### Option 3: Manual Git Push

\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

Vercel will automatically detect and deploy the project.

## 📦 Project Structure

\`\`\`
bns-otpking/
├── pages/                 # Next.js pages and API routes
│   ├── api/              # API endpoints
│   └── index.js          # Home page
├── public/               # Static assets
├── package.json          # Node.js dependencies
├── next.config.js        # Next.js configuration
├── vercel.json          # Vercel deployment config
├── requirements.txt      # Python dependencies
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore file
└── README.md            # This file
\`\`\`

## 🔌 API Endpoints

- **GET /api/health** - Health check endpoint

## 🛠️ Available Commands

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint

## 📝 Environment Variables

Create a \`.env.local\` file:

\`\`\`
NEXT_PUBLIC_API_URL=your_api_url
NODE_ENV=development
\`\`\`

## 🐛 Troubleshooting

### Port Already in Use
\`\`\`bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
\`\`\`

### Clear Cache and Rebuild
\`\`\`bash
rm -rf .next node_modules
npm install
npm run build
\`\`\`

## 📚 Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com)

## 👨‍💻 Author

**babarwakas22280-max**

## 📄 License

This project is private and for authorized use only.

---

**Happy Coding! 🎉**
