# College Cybersecurity Club Website

## Overview

This is a modern, full-stack web application for a college cybersecurity club. The application serves as the club's online presence, showcasing club information, member profiles, upcoming and past events (including CTF competitions and workshops), and providing a contact form for interested students. The site features a professional, tech-forward design inspired by modern organizations like Linear, Stripe, and GitHub, with a cybersecurity aesthetic combining technical sophistication with student-friendly approachability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application has four main routes: Home (`/`), Members (`/members`), Events (`/events`), and Contact (`/contact`).

**UI Component Library**: Built on shadcn/ui components (based on Radix UI primitives), providing a comprehensive set of accessible, customizable UI components. The design system uses the "new-york" style variant with Tailwind CSS for styling.

**State Management**: React Query (@tanstack/react-query) handles server state management, data fetching, and caching. No global client state management library is used; component-level state with React hooks is sufficient.

**Form Handling**: React Hook Form with Zod schema validation for type-safe form validation and submission.

**Design System**: 
- Typography uses Inter for headings/UI and JetBrains Mono for technical accents
- Tailwind CSS with custom color variables supporting light/dark modes
- Consistent spacing system based on Tailwind's spacing scale
- Custom elevation utilities for hover/active states

**Layout Strategy**: Fixed navigation header, flexible main content area, and footer. Responsive design with mobile-first approach using Tailwind's responsive prefixes.

### Backend Architecture

**Framework**: Express.js server with TypeScript, serving both API endpoints and static assets.

**API Structure**: RESTful API design with three main endpoints:
- `GET /api/members` - Retrieve all club members
- `GET /api/events` - Retrieve all events
- `POST /api/contact` - Submit contact form messages

**Development vs Production**: In development, Vite middleware handles hot module replacement and serves frontend assets. In production, pre-built static files are served from the `dist/public` directory.

**Request Logging**: Custom middleware logs all API requests with method, path, status code, duration, and response preview.

**Validation**: Zod schemas validate incoming request data before processing, with shared schema definitions between client and server.

### Data Storage

**Current Implementation**: In-memory storage using a custom `MemStorage` class that implements the `IStorage` interface. This stores users, members, events, and contact messages in JavaScript Maps with seed data for demonstration purposes.

**Schema Design**: Database schema defined using Drizzle ORM with PostgreSQL dialect. Three main tables:
- `members` - Stores club member information (leadership, regular members, faculty advisors, alumni) with roles, specialties, and social links
- `events` - Stores event information with types (workshop, ctf, networking, meeting), dates, locations, and status (upcoming/past)
- `contactMessages` - Stores contact form submissions with name, email, subject, and message content

**Migration Strategy**: Drizzle Kit configured for schema migrations with migrations output to `./migrations` directory.

**Future PostgreSQL Integration**: The application is configured to use Neon Database (@neondatabase/serverless) when a PostgreSQL connection is established. The schema is production-ready but currently uses in-memory storage for development/demonstration.

### External Dependencies

**UI Component Libraries**:
- Radix UI - Comprehensive primitive components for building accessible UI
- shadcn/ui - Pre-built component library built on Radix UI
- Lucide React & React Icons - Icon libraries for consistent iconography
- Embla Carousel - Carousel/slider functionality

**Styling & Design**:
- Tailwind CSS - Utility-first CSS framework
- class-variance-authority - Component variant styling
- Google Fonts (Inter, JetBrains Mono) - Typography loaded via CDN

**Form & Validation**:
- React Hook Form - Form state management and validation
- Zod - Schema validation library
- @hookform/resolvers - Zod resolver for React Hook Form

**Data Fetching**:
- TanStack React Query - Server state management and caching

**Database & ORM**:
- Drizzle ORM - Type-safe ORM for PostgreSQL
- Neon Database Serverless - PostgreSQL database provider (configured, not yet connected)
- drizzle-zod - Generate Zod schemas from Drizzle schema definitions

**Date Handling**:
- date-fns - Modern date utility library for formatting and manipulation

**Development Tools**:
- Replit plugins - Runtime error overlay, cartographer, and dev banner for Replit environment
- tsx - TypeScript execution for Node.js
- esbuild - Fast JavaScript bundler for production builds

**Session Management**:
- connect-pg-simple - PostgreSQL session store for Express (configured for future use)