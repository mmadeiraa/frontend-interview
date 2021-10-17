import React, { useEffect, useState } from 'react';

import { SWORDHealtLogo } from 'src/assets/images';

import './style.scss';

const Header = () => {
	const [scrolled150, setScroll] = useState(false);
  useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 150) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		}
    document.addEventListener("scroll", onScroll);

		return () => document.removeEventListener("scroll", onScroll);
  });

	return (
		<header className={scrolled150 && 'scrolled150'}>
			<h1>
				<img alt="Sword Logo" src={SWORDHealtLogo} />
			</h1>
			<div className="rightHeader">
				<p>Frontend Developer</p>
				<p>Challenge</p>
			</div>
		</header>
	)
};

export default Header;