import React from 'react';

import { Send } from 'src/assets/images';

import './style.scss';

const InputWithIcon = () => (
  <div className="input-container">
    <input type="email" placeholder="Subscribe our games" />
    <button onClick={() => alert('You are subscribed, welcome to our games, have fun!')}>
      <img src={Send} alt="Send" />
    </button>
  </div>
);

export default InputWithIcon;