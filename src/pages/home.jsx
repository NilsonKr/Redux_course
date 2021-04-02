import React, { useEffect } from 'react';
import { connect } from 'react-redux'; // connect redux with the component
import * as usersActions from '../actions/usersActions'; //Import all actions to modified the storage

const Home = props => {
	console.log(props.loading);
	console.log(props.error);

	useEffect(() => {
		props.fetchUsers(); //call the action "fetchAll" wich is a promise
	}, []);

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
	return reducers.usersReducer; //define which reducer/s will called by the actions in this components
};

//before to export the component , we call the connect of redux
//and pass through it the reducers and actions necessaries in this component
export default connect(mapStateToProps, usersActions)(Home);
