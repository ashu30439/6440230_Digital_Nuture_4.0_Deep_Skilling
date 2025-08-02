import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("book");

  let content;
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else if (view === "course") {
    content = <CourseDetails />;
  }

  return (
    <div className="container">
      <h1>📘 Blogger App</h1>
      <div className="buttons">
        <button onClick={() => setView("book")}>Book Details</button>
        <button onClick={() => setView("blog")}>Blog Details</button>
        <button onClick={() => setView("course")}>Course Details</button>
      </div>
      {content}
    </div>
  );
}

export default App;
