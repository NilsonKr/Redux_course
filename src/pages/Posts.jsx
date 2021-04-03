import React from 'react';

const Posts = props => {
	return (
		<div className='mainContainer'>
			<h1> {`You are on the #${props.match.params.key} user Posts`} </h1>
		</div>
	);
};

export default Posts;
