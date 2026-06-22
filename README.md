# Kaizer Chat App

A modern real-time chat application frontend built with React, Vite, React Router, Zustand, and Socket.IO client.

## Features
- Authentication pages for login and register
- Responsive chat layout with sidebar and message area
- Real-time messaging support with Socket.IO
- Zustand-based state management for auth and socket behavior

## Tech Stack
- React
- Vite
- React Router
- Zustand
- Socket.IO Client

## Getting Started

### Install dependencies
```bash
cd client
npm install
```

### Run locally
```bash
npm run dev
```

The app will be available at http://localhost:5173.

## Project Structure
- client/src/components - UI components for layout, chat, common, and auth
- client/src/store - Zustand stores for auth, chat, and socket state
- client/src/services - API and socket service helpers
