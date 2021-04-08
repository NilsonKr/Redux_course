import React from 'react';
import { connect } from 'react-redux';

const Comments = props => {
	//Render Comments

	return (
		<React.Fragment>
			{props.post.comments.map(comment => (
				<ul key={comment.id}>
					<li>{comment.email}</li>
					<li>{comment.body}</li>
				</ul>
			))}
		</React.Fragment>
	);
};

const mapStateToProps = ({ postsReducer }) => postsReducer;

export default connect(mapStateToProps)(Comments);
