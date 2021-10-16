import React from 'react';

import './style.scss';

const CandidateInformation = () => (
  <section className="informationWrapper">
    <picture>
      <div className="pictureArea">[Photo area]</div>
    </picture>
    <div className="candidateBio">
      <h2>John Smith</h2>
      <p>Age: 30</p>
      <p>Location: Porto</p>
      <p>Occupation: Ui/Ux designer</p>
    </div>
    <div className="candidateDescription">
      <p>About me: <br /> My name is Smith, John Smith aka double 07. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget facilisis velit, non condimentum dui. Maecenas a bibendum lectus. Nullam diam diam, hendrerit in ex a, ornare hendrerit mauris. Integer tincidunt semper arcu vel gravida. Cras vitae bibendum elit, ac viverra nulla. Suspendisse auctor consequat sem a commodo. </p>
    </div>
  </section>
);

export default CandidateInformation;