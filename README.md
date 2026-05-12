# Mercedes-Benz DBMS Project

A full‑stack Mercedes‑Benz Pakistan showroom and customer experience platform built for a DBMS course. It includes a production‑style React frontend, a RESTful Node/Express API, and a MySQL database with normalized schemas, views, triggers, and stored procedures.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Database Design](#database-design)
- [API Overview](#api-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Database Setup](#database-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Notes](#notes)

## Features
- Complete vehicle catalog with featured cars, new arrivals, category browsing, and search
- Authentication and role‑based access (customer vs. admin)
- Wishlist management and personalized customer profile
- Order placement and order tracking
- Test‑drive booking and service booking workflows
- Dealership directory with detailed showroom pages
- Customer ↔ admin chat experience
- Admin portal for inventory, orders, and customer management

## Tech Stack
**Frontend**
- React + Vite
- React Router
- Tailwind CSS
- Axios

**Backend**
- Node.js + Express
- MySQL (mysql2)
- JWT authentication + bcrypt

**Database**
- MySQL schema, views, triggers, stored procedures, and sample data

## System Architecture
- **Client:** React SPA for customer and admin experiences
- **API:** RESTful Express server exposing `/api/*` routes
- **Database:** MySQL instance with relational schema and seed data

## Database Design
Key tables (see `database/01_schema.sql`):
- `users`, `cars`, `car_images`
- `dealerships`, `dealership_staff`
- `orders`, `wishlist`
- `test_drive_bookings`, `service_bookings`
- `chat_messages`

Database scripts:
- `01_schema.sql` — schema + tables
- `02_indexes.sql` — indexes
- `03_views.sql` — views
- `04_triggers.sql` — triggers
- `05_procedures.sql` — procedures
- `06_sample_data.sql` — seed data

## API Overview
Base URL: `http://localhost:5000/api`

Main route groups:
- **Auth:** `/auth` (register, login, profile)
- **Cars:** `/cars` (catalog, featured, new arrivals, search)
- **Dealerships:** `/dealerships`
- **Orders:** `/orders` (place order, tracking)
- **Wishlist:** `/wishlist`
- **Bookings:** `/bookings` (test drives)
- **Services:** `/services` (service bookings)
- **Chat:** `/chat`
- **Admin:** `/admin` (stats, cars, orders, customers)

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- MySQL 8+
- npm

### Database Setup
1. Create the database and schema:
   ```bash
   mysql -u root -p < database/01_schema.sql
   ```
2. (Optional) Apply indexes, views, triggers, and procedures:
   ```bash
   mysql -u root -p < database/02_indexes.sql
   mysql -u root -p < database/03_views.sql
   mysql -u root -p < database/04_triggers.sql
   mysql -u root -p < database/05_procedures.sql
   ```
3. Seed sample data:
   ```bash
   mysql -u root -p < database/06_sample_data.sql
   ```

### Backend Setup
1. Create a `.env` file in `backend/` using `.env.example`:

   | Variable | Description |
   | --- | --- |
   | `DB_HOST` | MySQL host |
   | `DB_USER` | MySQL user |
   | `DB_PASSWORD` | MySQL password |
   | `DB_NAME` | Database name |
   | `DB_PORT` | MySQL port (default 3306) |
   | `JWT_SECRET` | JWT signing secret |
   | `PORT` | API port (default 5000) |

2. Install dependencies and run the API:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

### Frontend Setup
1. Install dependencies and start the UI:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
2. Open the app at `http://localhost:5173`.

## Project Structure
```
Mercedes-Benz-DBMS-Project/
├── backend/                 # Express API
│   ├── config/              # Database connection
│   ├── controllers/         # Business logic
│   ├── middleware/          # Auth + error handling
│   ├── routes/              # API endpoints
│   └── server.js            # API entry point
├── frontend/                # React SPA
│   ├── src/
│   │   ├── api/              # API clients
│   │   ├── components/       # Reusable UI
│   │   ├── context/          # Auth context
│   │   ├── pages/            # Route pages
│   │   └── styles/           # Tailwind styles
├── database/                # SQL schema + seed data
└── docs/                    # Documentation placeholders
```

## Scripts
**Backend**
- `npm run dev` — run API with nodemon
- `npm start` — run API

**Frontend**
- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build

## Notes
- Frontend API base URL is set in `frontend/src/api/axiosConfig.js`.
- The sample dataset includes demo users and admin accounts with bcrypt‑hashed passwords.

