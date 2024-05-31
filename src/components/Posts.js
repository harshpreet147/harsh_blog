import React from 'react';
import posts from '../data/posts';

const Posts = () => {
  return (
    <div className="blog-page">
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
