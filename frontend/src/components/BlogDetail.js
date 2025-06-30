import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogById } from '../store/blogSlice';

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentBlog, status, error } = useSelector(state => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!currentBlog) {
    return <div className="alert alert-info">Blog post not found</div>;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{currentBlog.title}</h2>
            <p className="text-muted">By {currentBlog.author}</p>
            <p className="card-text">{currentBlog.content}</p>
            <div className="mt-4">
              <Link to="/" className="btn btn-primary me-2">Back to List</Link>
              <Link to={`/blog/edit/${currentBlog._id}`} className="btn btn-warning">Edit Post</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 