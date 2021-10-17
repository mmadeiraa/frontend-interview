import React, { useContext } from 'react';
import { ContextAPI } from 'src/store';

import TicTacToe from 'src/containers/TicTacToe';

import './style.scss';

const PlayArea = () => {
  const { state: { currentMatchWins: { player1, player2 } }, dispatch } = useContext(ContextAPI);
  
  return (
    <section className="playAreaWrapper">
      <h2>Tic tac toe games</h2>
      <p>Welcome to the best game in the world</p>
      <select 
        defaultValue={9} 
        onChange={e => dispatch({ type: 'set_board_number', payload: e.target.value })}>
        <option value={9}>3x3</option>
        <option value={36}>6x6</option>
        <option value={81}>9x9</option>
      </select>
      <section>
        <div className="playerPoints">
          <span>Player 1</span>
          <span>{player1 || 0}</span>
        </div>
        <TicTacToe />
        <div className="playerPoints">
          <span>Player 2</span>
          <span>{player2 || 0}</span>
        </div>
      </section>
    </section>
  )
};

export default PlayArea;