import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';
import * as postsActions from '../actions/postsActions';

import Loader from '../components/Loader';
import Error from '../components/Error';
import PostsList from '../components/PostsList';

import './styles/Posts.css';

//Desestructuring Actions to rename it
const { getAll: getAllUsers } = usersActions;
const { getSingle: getPost } = postsActions;

const Posts = props => {
	const indexUser = props.match.params.key;

	useEffect(async () => {
		if (!props.usersReducer.users.length) {
			await props.getAllUsers();
		}

		props.getPost(indexUser);
	}, []);

	//if is loading show spinner
	if (props.usersReducer.loading || props.postsReducer.loading) {
		return (
			<div className='mainContainer'>
				<Loader />
			</div>
		);
	}

	//show error in case
	if (props.usersReducer.error || props.postsReducer.error) {
		return (
			<div className='mainContainer'>
				<Error message={props.usersReducer.error} />
			</div>
		);
	}

	return (
		<div className='postsContainer'>
			{/* Get the name from the storage*/}
			{props.usersReducer.users.length && (
				<React.Fragment>
					<h1 className='posts--user'>
						Posts By <em>{props.usersReducer.users[indexUser].name}</em>{' '}
					</h1>
					<PostsList index={indexUser} />
				</React.Fragment>
			)}
		</div>
	);
};

//Map State from reducers to props
const mapStateToProps = ({ usersReducer, postsReducer }) => {
	return {
		usersReducer,
		postsReducer,
	};
};

//Avoid conflicts between conventional names which are the same
//Map individual actions to props
const mapDispatchToProps = {
	getAllUsers,
	getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
