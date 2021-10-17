import React from 'react';

import './style.scss';

const GameWinner = ({ closeGameWinner, winner }) => (
  <div className="gameWinnerBackground">
    <div>
      <p>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *</p>
      <p>The Player{winner} won!</p>
      <button onClick={() => closeGameWinner()}>See statistics!</button>
    </div>
  </div>
);

export default GameWinner;