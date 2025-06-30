# Blog App

A simple blog application with React frontend and Node.js backend.

## Project Structure

- `frontend/`: React application with Redux (Node 14)
- `backend/`: Express.js API with TypeScript (Node 18)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following content:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog-app
```

4. Start the development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Features

- Create, read, update, and delete blog posts
- Responsive design using Bootstrap
- Redux state management
- MongoDB database
- TypeScript backend
- RESTful API

## API Endpoints

- GET `/api/blogs`: Get all blog posts
- GET `/api/blogs/:id`: Get a single blog post
- POST `/api/blogs`: Create a new blog post
- PUT `/api/blogs/:id`: Update a blog post
- DELETE `/api/blogs/:id`: Delete a blog post 