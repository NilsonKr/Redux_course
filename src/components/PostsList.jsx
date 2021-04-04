import React from 'react';
import { connect } from 'react-redux';
import { openClose } from '../actions/postsActions';

const PostsList = props => {
	const { index } = props;
	const { users } = props.usersReducer;
	const { posts } = props.postsReducer;

	//Validate if exists the posts list and also exists the reference to the user's posts
	if (!posts.length) return null;
	if (!('postsIndex' in users[index])) return null;

	//reference to the user's posts
	const postsIndex = users[index].postsIndex;

	return (
		<div className='postsList__container'>
			{posts[postsIndex].map((post, key) => (
				<div
					className='post__container'
					key={post.id}
					onClick={() => props.openClose(postsIndex, key)}
				>
					<h2>{post.title}</h2>
					<em>{post.body}</em>
					<p>{post.isOpen ? 'Open' : 'Close'}</p>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = ({ usersReducer, postsReducer }) => {
	return {
		usersReducer,
		postsReducer,
	};
};

const mapDispatchToProps = {
	openClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
