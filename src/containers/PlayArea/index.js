import React from 'react';

import './style.scss';

const PlayArea = () => (
	<section className="playAreaWrapper">
    <h2>Tic tac toe games</h2>
    <p>Welcome to the best game in the world</p>
    <section>
      <div className="playerPoints">
        <span>Player 1</span>
        <span>1</span>
      </div>
      <div className="game">
        Game
      </div>
      <div className="playerPoints">
        <span>Player 2</span>
        <span>2</span>
      </div>
    </section>
	</section>
);

export default PlayArea;