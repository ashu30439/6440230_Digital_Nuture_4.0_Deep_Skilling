import React from 'react';

function GuestPage() {
  return (
    <div className="page">
      <h2>Welcome Guest!</h2>
      <p>You can browse flight details here.</p>
      <ul>
        <li>Flight 101 - Hyderabad to Delhi</li>
        <li>Flight 202 - Mumbai to Bangalore</li>
        <li>Flight 303 - Chennai to Kolkata</li>
      </ul>
    </div>
  );
}

export default GuestPage;
