
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  const getBlogPostById = (postId) => {
    const blogPosts = [
      { id: 1, title: 'First Blog', content: 'This is an introduction to React.' },
      { id: 2, title: 'Second Blog', content: 'This is about Redux.' },
      { id: 3, title: 'Third Blog', content: 'This is about routing in React.' },
    ];
    return blogPosts.find((post) => post.id === parseInt(postId)
    );
  };

  const blogPost = getBlogPostById(id);
  console.log("18-->", blogPost)

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
