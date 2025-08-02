import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

const App = () => {
  const flag = true; // Change this to false to display IndianPlayers instead

  return (
    <div className="App">
      <h1>Welcome to Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;
