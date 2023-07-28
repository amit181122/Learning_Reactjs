// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  // Assume you have an array of blog posts with their ids and titles
  const blogPosts = [
    { id: 1, title: 'Introduction to React' },
    { id: 2, title: 'State Management with Redux' },
    { id: 3, title: 'Routing in React Apps' },
  ];

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
