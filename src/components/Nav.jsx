import React from 'react';
import { Link } from 'react-router-dom';

import './styles/nav.css';

const Nav = () => {
	return (
		<nav className='header__nav'>
			<Link to='/'>Home</Link>
			<Link to='/posts'>Posts</Link>
		</nav>
	);
};

export default Nav;
