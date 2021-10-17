import React from 'react';

import './style.scss';

const CandidateInformation = () => (
  <section className="informationWrapper">
    <picture>
      <div className="pictureArea">[Photo area]</div>
    </picture>
    <div className="candidateBio">
      <h2>Mário Madeira</h2>
      <p>Age: 23</p>
      <p>Location: Aveiro</p>
      <p>Occupation: Web Developer</p>
    </div>
    <div className="candidateDescription">
      <p>About me: <br /> My name is Madeira, Mário Madeira aka KazumiiTM on Playstation. You can find me most of the time riding my bike or at the gym during the morning. Love to get PR's and to find new sports to try. As a web developer I try to find logical problems to solve and realy enjoy doing so on an white board just to write what I think at that time. Get more with less code!</p>
    </div>
  </section>
);

export default CandidateInformation;