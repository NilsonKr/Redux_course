// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
	// const apiUrl = 'https://jsonplaceholder.typicode.com/users';
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	axios.get(apiUrl).then(({ data }) => {
	// 		setUsers(data);
	// 	});
	// }, []);

	return (
		<div className='uTable'>
			<div className='uTable__header'>
				<h2 className='users--title'>Name</h2>
				<h2 className='users--title title-border'>E-Mail</h2>
				<h2 className='users--title  title-border'>WebSite</h2>
			</div>
			{props.users.map(user => (
				<div className='uTable__user' key={user.id}>
					<p className='user--item'>{user.name}</p>
					<p className='user--item'>{user.email}</p>
					<p className='user--item'>{user.website}</p>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = reducers => {
	return reducers.usersReducer;
};

export default connect(mapStateToProps, {
	/* Actions */
})(Home);
