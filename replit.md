# VLGE Institute Private Limited - Website

## Overview

This is a modern, responsive full-stack web application for VLGE Institute Private Limited, built with React, Express.js, and Tailwind CSS. The application provides comprehensive information about educational services, study abroad programs, tech services, and student verification functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, utilizing a component-based architecture with modern hooks and state management. The application uses Vite as the build tool and development server for fast development and optimized production builds.

**Key Frontend Technologies:**
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI for accessible UI components
- React Query for server state management
- Wouter for client-side routing
- React Hook Form with Zod validation

### Backend Architecture
The backend follows a RESTful API design using Express.js with TypeScript. It implements a simple in-memory storage system that can be easily migrated to a PostgreSQL database using Drizzle ORM.

**Key Backend Technologies:**
- Express.js with TypeScript
- Drizzle ORM for database operations
- Zod for schema validation
- RESTful API endpoints

### Styling & UI System
The application uses a comprehensive design system built on Tailwind CSS with shadcn/ui components. Custom CSS variables define the brand colors and theming system.

**Design System Features:**
- Brand colors: #d93647 (primary), #004d5e (secondary)
- Responsive design with mobile-first approach
- Dark mode support
- Consistent component library
- Custom animations and effects

## Key Components

### Pages & Routes
- **Home**: Landing page with hero section, about us, and key statistics
- **Student Verification**: Certificate verification system
- **Consultancy**: Study abroad services for 34 European countries
- **Services**: Final year projects and tech services
- **Courses**: Certification, diploma, and PG diploma programs
- **Contact**: Contact form with EmailJS integration
- **Country Pages**: Dynamic pages for each European country

### Core Features
1. **Student Certificate Verification**: API-driven verification system
2. **Study Abroad Information**: Detailed country-specific information
3. **Course Catalog**: Comprehensive listing of educational programs
4. **Contact System**: Form submission with email integration
5. **Responsive Design**: Mobile-optimized user experience

### Animation System
The application includes a sophisticated animation system using GSAP:
- Splash screen with logo animation
- Scroll-triggered animations for sections
- Counter animations for statistics
- Smooth page transitions
- News ticker with continuous scrolling

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend makes HTTP requests to Express.js backend
2. **Data Validation**: Zod schemas validate both client and server data
3. **State Management**: React Query handles server state and caching
4. **Form Handling**: React Hook Form manages form state and validation

### Storage Layer
Currently uses in-memory storage with sample data for:
- Student verification records
- Contact form submissions
- User management (prepared for future use)

The storage interface is designed to easily migrate to PostgreSQL using Drizzle ORM.

## External Dependencies

### Development & Build Tools
- Vite for fast development and optimized builds
- TypeScript for type safety
- ESBuild for server bundling
- PostCSS and Autoprefixer for CSS processing

### UI & Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Lucide React for consistent iconography
- GSAP for advanced animations

### Backend Services
- Express.js for server framework
- Drizzle ORM for database operations
- Zod for runtime type validation

### Third-party Integrations
- EmailJS for contact form email delivery
- Replit-specific development tools
- Font integration (Google Fonts for Cascadia Code)

## Deployment Strategy

### Development Setup
- Vite dev server for frontend development
- Express.js server with hot reload using tsx
- Shared TypeScript configuration for consistent types
- Path aliases for clean imports

### Production Build
1. Frontend builds to `dist/public` using Vite
2. Backend bundles to `dist/index.js` using ESBuild
3. Static assets served from Express.js
4. Environment variables for configuration

### Database Migration
The application is prepared for PostgreSQL migration:
- Drizzle config points to PostgreSQL
- Schema definitions ready for migration
- Storage interface abstracts database operations
- Migration files can be generated using `drizzle-kit`

### Performance Optimizations
- Lazy loading of components and libraries
- Optimized bundle sizes with tree shaking
- Image optimization and lazy loading
- Efficient CSS with Tailwind's purging
- Server-side compression and caching headers