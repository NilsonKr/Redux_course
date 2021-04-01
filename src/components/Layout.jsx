import React from 'react';

import Nav from './Nav';

const Layout = props => {
	return (
		<React.StrictMode>
			<Nav />
			{props.children}
		</React.StrictMode>
	);
};

export default Layout;
