import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const fetchBlogById = createAsyncThunk('blogs/fetchBlogById', async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
});

export const createBlog = createAsyncThunk('blogs/createBlog', async (blogData) => {
  const response = await axios.post(API_URL, blogData);
  return response.data;
});

export const updateBlog = createAsyncThunk('blogs/updateBlog', async ({ id, blogData }) => {
  const response = await axios.put(`${API_URL}/${id}`, blogData);
  return response.data;
});

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    currentBlog: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.currentBlog = action.payload;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex(blog => blog._id === action.payload._id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter(blog => blog._id !== action.payload);
      });
  }
});

export default blogSlice.reducer; 