import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs, deleteBlog } from '../store/blogSlice';

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector(state => state.blogs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      dispatch(deleteBlog(id));
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (status === 'loading') {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h2 className="display-4 mb-4">Latest Blog Posts</h2>
          <Link to="/create" className="btn btn-primary mb-4">
            <i className="bi bi-plus-circle me-2"></i>Write New Post
          </Link>
        </div>
      </div>
      
      <div className="row g-4">
        {blogs.map(blog => (
          <div key={blog._id} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title h4 mb-3">{blog.title}</h5>
                <p className="card-text text-muted mb-2">
                  <small>
                    <i className="bi bi-person-circle me-2"></i>
                    {blog.author}
                  </small>
                </p>
                <p className="card-text text-muted mb-3">
                  <small>
                    <i className="bi bi-calendar me-2"></i>
                    {formatDate(blog.createdAt)}
                  </small>
                </p>
                <p className="card-text">
                  {blog.content.substring(0, 150)}...
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pt-0">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/blog/${blog._id}`} className="btn btn-outline-primary btn-sm">
                    Read More
                  </Link>
                  <div>
                    <Link to={`/blog/edit/${blog._id}`} className="btn btn-outline-warning btn-sm me-2">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <button 
                      onClick={() => handleDelete(blog._id)} 
                      className="btn btn-outline-danger btn-sm"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList; 