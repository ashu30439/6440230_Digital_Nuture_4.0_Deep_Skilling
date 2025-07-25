import React from 'react';
import './App.css';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails number="C001" type="Full Stack" status="ongoing" />
      <CohortDetails number="C002" type="Data Science" status="completed" />
    </div>
  );
}

export default App;
