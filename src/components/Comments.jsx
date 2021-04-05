import React from 'react';

const Comments = props => {
	const { post } = props;

	return (
		<React.Fragment>
			{post.comments.map(comment => (
				<ul>
					<li>{comment.email}</li>
					<li>{comment.body}</li>
				</ul>
			))}
		</React.Fragment>
	);
};

export default Comments;
