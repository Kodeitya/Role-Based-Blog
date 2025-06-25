
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Blog.css'; 

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="blogs-container">
      <h2 className="blogs-heading">All Blogs</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-snippet">
                {blog.content.slice(0, 150)}{blog.content.length > 150 && '...'}
              </p>
              <div className="blog-author">✍ By {blog.author?.name || 'Anonymous'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
