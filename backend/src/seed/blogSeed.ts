import mongoose from 'mongoose';
import { Blog } from '../models/blog.model';

const sampleBlogs = [
  {
    title: "The Art of Modern Web Development",
    content: `Web development has evolved significantly over the past decade. From simple static pages to complex web applications, the journey has been fascinating. Modern web development encompasses various technologies and frameworks that make our lives easier.

    React, Angular, and Vue have revolutionized how we build user interfaces. These frameworks provide robust solutions for creating interactive and dynamic web applications. Additionally, the rise of TypeScript has brought type safety to JavaScript development, making our applications more reliable and maintainable.

    As we look to the future, exciting technologies like WebAssembly and Progressive Web Apps are paving the way for even more powerful web applications.`,
    author: "Sarah Johnson",
  },
  {
    title: "Understanding Machine Learning Basics",
    content: `Machine Learning has become an integral part of modern technology. From recommendation systems to image recognition, ML is everywhere. Let's explore some fundamental concepts that make machine learning possible.

    At its core, machine learning is about teaching computers to learn from data. Instead of explicitly programming rules, we provide examples and let the computer figure out the patterns. This approach has proven incredibly successful in solving complex problems that traditional programming struggles with.

    The three main types of machine learning are supervised learning, unsupervised learning, and reinforcement learning. Each has its own unique applications and challenges.`,
    author: "Michael Chen",
  },
  {
    title: "Sustainable Living in Modern Cities",
    content: `As urban populations continue to grow, sustainable living becomes increasingly important. Cities around the world are implementing innovative solutions to reduce their environmental impact while improving quality of life.

    Green buildings, renewable energy, and smart transportation systems are just a few examples of how cities are becoming more sustainable. Urban farming initiatives are bringing fresh, local produce to city dwellers while reducing carbon emissions from transportation.

    Individual actions also play a crucial role. Simple changes in our daily habits can contribute to a more sustainable future. From reducing plastic use to supporting local businesses, every action counts.`,
    author: "Emma Wilson",
  },
  {
    title: "The Impact of Artificial Intelligence on Healthcare",
    content: `Artificial Intelligence is revolutionizing healthcare in unprecedented ways. From diagnosis to treatment planning, AI tools are helping healthcare providers make better decisions and improve patient outcomes.

    Machine learning algorithms can analyze medical images with remarkable accuracy, often detecting issues that human doctors might miss. AI-powered systems can also predict patient risks and recommend preventive measures.

    However, it's important to remember that AI is not replacing healthcare professionals. Instead, it's augmenting their capabilities and allowing them to focus more on patient care and complex decision-making.`,
    author: "Dr. James Roberts",
  }
];

export const seedBlogs = async () => {
  try {
    // Clear existing blogs
    await Blog.deleteMany({});
    
    // Insert sample blogs
    await Blog.insertMany(sampleBlogs);
    
    console.log('Sample blogs have been seeded successfully');
  } catch (error) {
    console.error('Error seeding blogs:', error);
  }
}; 