# Synecology Corporate Website

## Overview

This is a multi-page corporate website for Synecology, a digital ecology company. The project is built as a modern full-stack application using React/TypeScript for the frontend and Express.js for the backend, with a focus on environmental consulting and digital solutions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: TSX for TypeScript execution

### Design System
- **Theme**: Dark theme with deep charcoal background (#1A1A1A)
- **Primary Color**: Bright technological green (#00D66A)
- **Typography**: Inter font family
- **Component Library**: Custom components built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Key Components

### Database Schema
- **Users**: Basic user authentication system
- **Blog Posts**: Content management for articles and insights
- **Case Studies**: Project showcases with company details and results
- **Team Members**: Company team information with photos and bios
- **Testimonials**: Client feedback and ratings
- **Services**: Company service offerings with categories

### Page Structure
- **Home**: Hero section with services overview, cases, team, and testimonials
- **Services**: Detailed service offerings with feature lists
- **Cases**: Portfolio of completed projects with metrics
- **About**: Company information and team profiles
- **Blog**: Articles and insights about digital ecology
- **Contact**: Contact form with validation

### UI Components
- **Header**: Sticky navigation with smooth scroll functionality
- **Hero**: Full-screen hero section with statistics
- **Cards**: Reusable card components for services, cases, blog posts, and testimonials
- **Forms**: Validated contact forms with error handling
- **Footer**: Company information and navigation links

## Data Flow

1. **Static Content**: Most content is currently hardcoded in components (sample data)
2. **Form Submissions**: Contact form uses React Hook Form with Zod validation
3. **Navigation**: Wouter handles client-side routing with smooth scrolling
4. **API Ready**: Backend structure prepared for future API endpoints
5. **Database Ready**: Drizzle schema defined for content management

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@radix-ui/***: Headless UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **wouter**: Lightweight client-side routing
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production builds

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: Express server with TSX for TypeScript execution
- **Database**: Neon Database with Drizzle Kit for migrations

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Migrations run via `drizzle-kit push`

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment setting (development/production)

### Deployment Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run db:push`: Push database schema changes

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```