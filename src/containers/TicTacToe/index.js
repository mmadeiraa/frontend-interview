import React, { useContext, useEffect } from 'react';
import { ContextAPI } from 'src/store';
import { checkBoard } from 'src/utils/checkBoard';

import GameWinner from 'src/components/GameWinner';
import { X, O } from 'src/assets/images';
import './style.scss';

const TicTacToe = () => {
  const { state: {
    board,
    winner,
    moves,
    moveLimit,
    currentMatchWins: {
      player1,
      player2,
    }
  }, dispatch } = useContext(ContextAPI);

  const handlePlay = idx => {
    if(winner) return;
    if (board[idx]) return;
    if (moves === moveLimit) return alert('No moves left! Reset board to play again.');
    dispatch({ type: 'set_new_board', payload: idx });
    dispatch({ type: 'change_player' });
    dispatch({ type: 'add_move' });
  };

  useEffect(() => {
    const win = checkBoard(board);
    const draw = moves === moveLimit;

    if(win) {
      dispatch({ type: 'set_match', payload: win });
    }

    if (draw) {
      dispatch({ type: 'set_draw' });
    }

    if (!winner && (player1 === 5 || player2 === 5)) {
      const winner = player1 === 5 ? '1' : '2';
      dispatch({ type: 'set_winner', payload: winner });
    }
  }, [handlePlay])

  return (
    <div className="tictactoeWrapper">
      {board.map((_, idx) => (
        <div key={idx} className="cell" onClick={() => handlePlay(idx)}>
          {board[idx] === '1' && <img alt="x" src={X} />}
          {board[idx] === '2' && <img alt="o" src={O} />}
        </div>
      ))}
      {winner && 
        <GameWinner 
          winner={winner} 
          closeGameWinner={() => {
            dispatch({ type: 'reset_board' });
            document.getElementById('statisticsSection').scrollIntoView();
          }} />
      }
    </div>
  );
};

export default TicTacToe;