import React from 'react';

import * as socialIcons from 'src/assets/images';

import InputWithIcon  from 'src/components/InputWithIcon';

import './style.scss';

const Footer = () => (
	<footer>
    <div>
      <h4>About Page</h4>
      <ul>
        <li>Play tic tac toe or 4 in a row game anytime!</li>
        <li>Created by Madeira</li>
      </ul>
    </div>
    <div>
      <h4>Contacts</h4>
      <ul>
        <li>(+351) 123 123 123 </li>
        <li>Rua Sá da Bandeira, Porto</li>
      </ul>
    </div>
    <div>
      <h4>Stay in Touch</h4>
      <ul className="socials">
        <li>
          <a href="/#">
            <img alt="facebook" src={socialIcons["Facebook"]}/>
          </a>
        </li>
        <li>
          <a href="/#">
            <img alt="instagram" src={socialIcons["Instagram"]}/>
          </a>
        </li>
        <li>
          <a href="/#">
            <img alt="twitter" src={socialIcons["Twitter"]}/>
          </a>
        </li>
      </ul>
      <InputWithIcon />
    </div>
	</footer>
);

export default Footer;