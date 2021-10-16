import React from 'react';

import Percentages from 'src/components/Percentages';

import './style.scss';

const Statistics = () => (
  <section className="statisticsWrapper">
    <h2>Awesome Statistics</h2>
    <p>All statistics in one place!</p>
    <section>
      <div className="gameVictories">
        <h3>Game Victories %</h3>
        <div className="playerPercentages">
          <Percentages name={"Player 1"} values={{ matches: 5, loses: 3, victories: 2 }} />
          <Percentages name={"Player 2"} values={{ matches: 5, loses: 2, victories: 3 }} />
        </div>
      </div>
      <div className="matches">
        <h3>Played Matches</h3>
        <h3>Game History</h3>
      </div>
    </section>
  </section>
);

export default Statistics;