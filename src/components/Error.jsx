import React from 'react';

import error from '../assets/errror.svg';

const Error = props => {
	return (
		<div className='mainContainer'>
			<img src={error} alt='Error' />
			<h2>{props.message} </h2>
		</div>
	);
};

export default Error;
