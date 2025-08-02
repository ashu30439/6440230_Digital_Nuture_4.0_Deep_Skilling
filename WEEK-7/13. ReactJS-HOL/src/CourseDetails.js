import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: 'React Fundamentals' },
    { id: 2, name: 'Advanced React Patterns' }
  ];

  return (
    <div>
      <h2>🎓 Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
