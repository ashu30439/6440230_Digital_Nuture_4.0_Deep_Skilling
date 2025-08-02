import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 80 },
    { name: "Dhawan", score: 68 },
    { name: "Gill", score: 55 },
    { name: "Pant", score: 90 },
    { name: "Iyer", score: 76 },
    { name: "Jadeja", score: 49 },
    { name: "Ashwin", score: 30 },
    { name: "Bumrah", score: 85 },
    { name: "Shami", score: 65 },
    { name: "Siraj", score: 72 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70:</h2>
      <ul>
        {lowScorers.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
