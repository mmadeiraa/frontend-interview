import React from 'react';

import './style.scss';

const Percentages = ({ name, values: { matches = 0, loses = 0, victories = 0 } }) => {
  const percentageOfGame = games => ((games / matches) * 100).toFixed(0);
  return (
    <div className="percentageWrapper">
      <h4>{name}</h4>
      <div>
        <div>
          <span className="percentage">{percentageOfGame(victories)}%</span>
          <span>V</span>
        </div>
        <div>
          <span className="percentage">{percentageOfGame(loses)}%</span>
          <span>L</span>
        </div>
      </div>
    </div> 
  )
};

export default Percentages;