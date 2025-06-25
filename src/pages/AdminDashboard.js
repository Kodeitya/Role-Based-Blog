
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState(null); // <- new state

  const fetchBlogs = async () => {
    const res = await api.get("/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const createPost = async () => {
    if (!newPost.title || !newPost.content) return;
    await api.post("/blogs", newPost);
    setNewPost({ title: "", content: "" });
    fetchBlogs();
  };

  const updatePost = async () => {
    if (!newPost.title || !newPost.content || !editingId) return;
    await api.put(`/blogs/${editingId}`, newPost);
    setNewPost({ title: "", content: "" });
    setEditingId(null); 
    fetchBlogs();
  };

  const deletePost = async (id) => {
    await api.delete(`/blogs/${id}`);
    fetchBlogs();
  };

  const editPost = (blog) => {
    setNewPost({ title: blog.title, content: blog.content });
    setEditingId(blog._id);
  };

  return (
    <div className="admin-container">
      <h2 className="admin-heading">Admin Dashboard</h2>

      <div className="create-post-section">
        <h3>{editingId ? "Update Blog Post" : "Create New Blog Post"}</h3>
        <input
          placeholder="Enter blog title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Enter blog content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        {editingId ? (
          <button className="btn-update" onClick={updatePost}>Update Post</button>
        ) : (
          <button className="btn-create" onClick={createPost}>Create Post</button>
        )}
      </div>

      <div className="post-list">
        <h3>All Posts</h3>
        {blogs.map(blog => (
          <div key={blog._id} className="post-card">
            <div className="post-info">
              <h4>{blog.title}</h4>
              <p>{blog.content.slice(0, 100)}{blog.content.length > 100 && '...'}</p>
            </div>
            <div className="post-actions">
              <button className="btn-edit" onClick={() => editPost(blog)}>Edit</button>
              <button className="btn-delete" onClick={() => deletePost(blog._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
