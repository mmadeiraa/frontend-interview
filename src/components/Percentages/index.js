import React from 'react';

import { getPercentage } from 'src/utils/getPercentage';
import { checkColor } from 'src/utils/checkColor';

import './style.scss';

const Percentages = ({ name, values: { matches = 0, loses = 0, wins = 0 } }) => {
  const winsPercentage = getPercentage(wins, matches);
  const losesPercentage = getPercentage(loses, matches);

  return (
    <div className="percentageWrapper">
      <h4>{name}</h4>
      <div>
        <div>
          <span className={`percentage ${checkColor(winsPercentage, 'w')}`}>
            {isNaN(winsPercentage) ? 0 : winsPercentage}%
          </span>
          <span>V</span>
        </div>
        <div>
          <span className={`percentage ${checkColor(losesPercentage, 'l')}`}>
            {isNaN(losesPercentage) ? 0 : losesPercentage}%
          </span>
          <span>L</span>
        </div>
      </div>
    </div> 
  )
};

export default Percentages;