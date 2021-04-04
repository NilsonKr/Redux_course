import React from 'react';
import { connect } from 'react-redux';

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
			{posts[postsIndex].map(post => (
				<div className='post__container' key={post.id}>
					<h2>{post.title}</h2>
					<em>{post.body}</em>
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

export default connect(mapStateToProps)(PostsList);
