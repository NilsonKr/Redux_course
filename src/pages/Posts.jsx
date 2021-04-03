import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';
import * as postsActions from '../actions/postsActions';

import Loader from '../components/Loader';
import Error from '../components/Error';

import './styles/Posts.css';

//Desestructuring Actions to rename it
const { getAll: getAllUsers } = usersActions;
const { getSingle: getPost } = postsActions;

const Posts = props => {
	console.log(props);
	const indexUser = props.match.params.key;

	useEffect(async () => {
		if (!props.usersReducer.users.length) {
			await props.getAllUsers();
		}
		props.getPost(indexUser);
	}, []);

	//if is loading show spinner
	if (props.loading || !props.usersReducer.users.length) {
		return (
			<div className='mainContainer'>
				<Loader />
			</div>
		);
	}

	//show error in case
	if (props.error) {
		return (
			<div className='mainContainer'>
				<Error message={props.error} />
			</div>
		);
	}

	return (
		<div className='postsContainer'>
			<h1>
				{/* Get the name from the storage*/}
				Posts By <em>{props.usersReducer.users[indexUser].name}</em>{' '}
			</h1>
		</div>
	);
};

//Maps redux connect
const mapStateToProps = ({ usersReducer, postsReducer }) => {
	return {
		usersReducer,
		postsReducer,
	};
};

//Avoid conflicts between conventional names which are the same
const mapDispatchToProps = {
	getAllUsers,
	getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
