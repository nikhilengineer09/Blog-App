import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { blogRoutes } from './routes/blog.routes';
import { seedBlogs } from './seed/blogSeed';

dotenv.config();

// Set strictQuery to false to prepare for Mongoose 7
mongoose.set('strictQuery', false);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/blogs', blogRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-app')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Seed the database with sample blogs
    await seedBlogs();
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  }); 