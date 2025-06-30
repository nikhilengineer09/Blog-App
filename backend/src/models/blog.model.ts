import mongoose from 'mongoose';

export interface IBlog {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new mongoose.Schema<IBlog>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const Blog = mongoose.model<IBlog>('Blog', blogSchema); 