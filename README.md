# Leaptics - Premium Digital Marketing Agency Platform

A modern, responsive web application for Leaptics, a premium digital marketing agency. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark/light mode
- 📱 Mobile-first approach
- 🔐 Secure authentication with NextAuth.js
- 📊 Interactive dashboard with analytics
- 📝 Blog/Insights section
- 📈 Campaign tracking and management
- 📧 Contact form with lead capture
- 🎭 Smooth animations with Framer Motion

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide Icons
- React Hook Form
- Zod
- Recharts

### Backend
- Node.js
- Prisma ORM
- PostgreSQL
- NextAuth.js
- Express.js

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Set up the database:
   ```bash
   npx prisma db push
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
│   ├── ui/             # UI components
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
├── lib/                # Utility functions and configurations
├── styles/             # Global styles
├── types/              # TypeScript types
└── prisma/             # Database schema and migrations
```

## Environment Variables

Required environment variables:

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - see LICENSE file for details
