# replit.md

## Overview

This is a full-stack portfolio website for Ajay Waghmare, a Full Stack and DevOps developer. The application features a modern React frontend with animated components and a Node.js/Express backend. It showcases personal information, skills, projects, experience, and includes a contact form functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using modern UI components and animations
- **Backend**: Express.js server with REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage with fallback to database)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and development

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for page transitions and interactive elements

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **API Structure**: RESTful endpoints under `/api` prefix
- **File Handling**: Resume download functionality
- **Development**: Vite integration for hot reloading

### Database Schema
The application uses two main tables:
- `users`: For user authentication (id, username, password)
- `contact_messages`: For storing contact form submissions (id, name, email, message, created_at)

## Data Flow

1. **Portfolio Display**: Static content rendered on the client with animated sections
2. **Contact Form**: Form submissions sent to `/api/contact` endpoint, validated with Zod schemas
3. **Resume Download**: Direct file download via `/api/resume` endpoint
4. **Data Storage**: Currently using in-memory storage with interface for database integration

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Animations**: Framer Motion for smooth animations and transitions
- **Icons**: Lucide React icons and React Icons for technology logos
- **Form Handling**: React Hook Form with Hookform resolvers
- **HTTP Client**: TanStack Query for API calls

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **Validation**: Zod for schema validation and type safety
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution

### Build Tools
- **Frontend**: Vite with React plugin and runtime error overlay
- **Backend**: esbuild for production builds
- **CSS**: PostCSS with Tailwind CSS and Autoprefixer
- **TypeScript**: Shared configuration across client and server

## Deployment Strategy

The application is designed for deployment with:

1. **Development**: 
   - Vite dev server for frontend with HMR
   - tsx for backend development with auto-restart
   - Concurrent development of both frontend and backend

2. **Production Build**:
   - Vite builds frontend to `dist/public`
   - esbuild bundles backend to `dist/index.js`
   - Static file serving integrated with Express

3. **Database**:
   - PostgreSQL database with Drizzle migrations
   - Environment variable configuration for database URL
   - Fallback to in-memory storage for development

4. **Asset Management**:
   - Resume PDF stored in `attached_assets` directory
   - Static assets served through Vite in development
   - Built assets served through Express in production

The architecture supports both development and production environments with proper build optimization and database integration capabilities.