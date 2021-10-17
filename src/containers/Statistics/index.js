import React, { useContext } from 'react';
import { ContextAPI } from 'src/store';

import Percentages from 'src/components/Percentages';
import './style.scss';

const Statistics = () => {
  const { state: {
    matches,
    matchesHistory,
    results: {
      player1,
      player2,
    },
  }} = useContext(ContextAPI);

  return (
    <section className="statisticsWrapper" id="statisticsSection">
      <h2>Awesome Statistics</h2>
      <p>All statistics in one place!</p>

      <section>
        <div className="gameVictories">
          <h3>Game Victories %</h3>
          <div className="playerPercentages">
            <Percentages name={"Player 1"} values={{ matches, ...player1 }} />
            <Percentages name={"Player 2"} values={{ matches, ...player2 }} />
          </div>
        </div>
        <div className="matches">
          <h3>Played Matches</h3>
          <span className="matches">
            {matches}
          </span>
          <h3>Game History</h3>
          {matchesHistory.map((val, idx) => <span key={idx} className="singleHistory">P{val}</span>)}
        </div>
      </section>
    </section>
  )
};

export default Statistics;