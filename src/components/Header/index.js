import React from 'react';

import { SWORDHealtLogo } from 'src/assets/images';

import './style.scss';

const Header = () => (
	<header>
		<h1>
			<img alt="Sword Logo" src={SWORDHealtLogo} />
		</h1>
		<div className="rightHeader">
			<p>Frontend Developer</p>
			<p>Challenge</p>
		</div>
	</header>
);

export default Header;