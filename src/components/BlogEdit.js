import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogById, updateBlog } from '../store/blogSlice';

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentBlog, status, error } = useSelector(state => state.blogs);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentBlog) {
      setFormData({
        title: currentBlog.title,
        content: currentBlog.content,
        author: currentBlog.author
      });
    }
  }, [currentBlog]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateBlog({ id, blogData: formData })).unwrap();
      navigate(`/blog/${id}`);
    } catch (error) {
      console.error('Failed to update blog:', error);
    }
  };

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Edit Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="6"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Update Post</button>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit; 