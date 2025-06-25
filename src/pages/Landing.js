
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Landing.css'; 


const Landing = () => {
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    const fetchBlogCount = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs/count');
        setBlogCount(res.data.count);
      } catch (error) {
        console.error('Error fetching blog count:', error);
      }
    };
    fetchBlogCount();
  }, []);

  return (
    <div className="landing-wrapper">
      <header className="landing-header">
        <h2>Blog</h2>
        <h1>Discover our latest news</h1>
        <p>Discover the achievements that set us apart. From groundbreaking projects to industry accolades, we take pride in our accomplishments.</p>
        <div className="landing-search">
          <input type="text" placeholder="Search articles..." />
          <button className="search-btn">Find Now</button>
        </div>
      </header>

      <main className="landing-main">
        <div className="blog-section">
          <h3 className="section-title">Whiteboards are remarkable.</h3>
          <div className="blog-grid">
            
            <div className="blog-card">
              <img src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=" alt="Post" />
              <span className="blog-tag">Health & Nutrition</span>
              <h4>Wanderlust Unleashed: Top Hidden Gems</h4>
              <p>Discover off-the-radar destinations offering breathtaking scenery.</p>
            </div>
            <div className="blog-card">
              <img src="https://media.istockphoto.com/id/1971796553/photo/young-couple-is-standing-at-mountain-top-with-great-view.jpg?b=1&s=612x612&w=0&k=20&c=IXoBQgZqFUb8SRI87J9BHWtbgyuuQiImJSt1pHAp5Cc=" alt="Post" />
              <span className="blog-tag">Sustainability</span>
              <h4>25 Destinations for Every Adventurer</h4>
              <p>A curated list of must-visit places for every traveler.</p>
            </div>
            <div className="blog-card">
              <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww" alt="Post" />
              <span className="blog-tag">Cultural Insights</span>
              <h4>How to Travel Like a Local</h4>
              <p>Immerse in culture by following insider travel tips.</p>
            </div>
            <div className="blog-card">
              <img src="https://media.assettype.com/deccanherald%2F2025-06-13%2Fv3vvkkf0%2Fistock-1743104649720.jpg?rect=0%2C27%2C720%2C378&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop" alt="Post" />
              <span className="blog-tag">Politics</span>
              <h4>How world politics are moving</h4>
              <p>Take a deep insights into Iran and Israel war</p>
            </div>
          </div>
        </div>

      </main>

      <footer className="blog-count-footer">
        <p>Total Blog Posts: <strong>{blogCount}</strong></p>
      </footer>
    </div>
  );
};

export default Landing;
