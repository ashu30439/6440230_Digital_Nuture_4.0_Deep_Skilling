import React from 'react';

const IndianPlayers = () => {
  const allPlayers = [
    "Virat", "Rohit", "Dhawan", "Gill", "Pant", "Iyer", "Jadeja", "Ashwin"
  ];

  const [oddTeam, evenTeam] = allPlayers.reduce(([odd, even], player, idx) => {
    return idx % 2 === 0 ? [[...odd, player], even] : [odd, [...even, player]];
  }, [[], []]);

  const T20players = ["SKY", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddTeam.map((p, idx) => <li key={idx}>{p}</li>)}</ul>

      <h2>Even Team Players</h2>
      <ul>{evenTeam.map((p, idx) => <li key={idx}>{p}</li>)}</ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>{mergedPlayers.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
