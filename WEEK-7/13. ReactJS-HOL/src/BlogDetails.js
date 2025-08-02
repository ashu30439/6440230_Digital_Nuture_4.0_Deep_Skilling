import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: 'Hooks in Depth' },
    { id: 2, title: 'React Router Guide' }
  ];

  return (
    <div>
      <h2>📝 Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
