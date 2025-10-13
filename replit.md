# Rock Paper Scissors Card Game

## Overview

A traditional rock-paper-scissors game reimagined as a digital card game with a modern, playful interface. Players compete against the computer in a best-of-9 rounds format, with each player having 3 cards of each type (scissors, rock, paper) to strategically deploy across multiple rounds.

The application features a clean, gaming-focused UI inspired by modern digital card games, with vibrant colors, smooth animations, and an emphasis on visual feedback for game states.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component Strategy:**
- shadcn/ui component library (Radix UI primitives) for accessible, customizable base components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom game components built on top of shadcn/ui primitives (GameCard, BattleArena, PlayerHand, ScoreBoard, GameResults)

**Design System:**
- Dark-first color palette with custom card-specific colors (purple for scissors, brown for rock, blue for paper)
- Player differentiation through color: cyan for player 1, pink for player 2
- Typography: Inter for UI, Fredoka for playful game elements
- Game state visualization through color: green for win, yellow for draw, red for lose

**State Management:**
- Local React state (useState) for game logic - no external state management needed
- TanStack Query (React Query) for server state management (prepared for future API integration)
- Custom hooks pattern for reusable logic

**Game Logic Architecture:**
- Pure client-side game mechanics
- Deterministic winner calculation (scissors > paper > rock > scissors)
- Round-based progression system with star scoring
- Computer opponent uses random card selection from available cards

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the HTTP server
- Custom Vite middleware integration for development mode
- Minimal backend currently - prepared for future game state persistence

**Development Setup:**
- Separate development and production configurations
- Hot module replacement in development via Vite middleware
- Static file serving for production builds

**Database Layer (Prepared but Minimal):**
- Drizzle ORM configured for PostgreSQL
- Schema includes user authentication structure (users table with username/password)
- Currently using in-memory storage (MemStorage class) as placeholder
- Migration system ready via drizzle-kit

**API Structure:**
- RESTful API design ready at `/api/*` endpoints
- Storage interface pattern for data operations (IStorage interface)
- Error handling middleware with proper HTTP status codes

### External Dependencies

**Core Libraries:**
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm** + **@neondatabase/serverless**: Database ORM with Neon PostgreSQL support
- **wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation utilities

**UI Component Libraries:**
- **@radix-ui/react-***: Headless UI primitives (dialogs, dropdowns, tooltips, etc.)
- **lucide-react**: Icon library for game symbols and UI icons
- **class-variance-authority**: Type-safe variant styling
- **tailwind-merge** + **clsx**: Utility class composition

**Form & Validation:**
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation
- **drizzle-zod**: Database schema to Zod schema conversion

**Development Tools:**
- **Replit-specific plugins**: Runtime error overlay, cartographer, dev banner
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code

**Database Integration:**
- **Neon Serverless PostgreSQL**: Configured as the database provider
- **drizzle-kit**: Database migration management
- Connection via DATABASE_URL environment variable

**Session Management (Prepared):**
- **express-session** + **connect-pg-simple**: PostgreSQL-backed session store ready for authentication implementation