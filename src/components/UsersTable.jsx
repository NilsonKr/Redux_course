import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const UsersTable = props => {
	return (
		<div className='uTable'>
			<div className='uTable__header'>
				<h2 className='users--title'>Name</h2>
				<h2 className='users--title title-border'>E-Mail</h2>
				<h2 className='users--title  title-border'>WebSite</h2>
			</div>
			{props.users.map((user, key) => (
				<div className='uTable__user' key={user.id}>
					<p className='user--item'>{user.name}</p>
					<p className='user--item'>{user.email}</p>
					<p className='user--item'>{user.website}</p>
					<Link to={`/posts/${key}`} className='user--icon'>
						<span className='fas fa-eye fa-lg '></span>
					</Link>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps)(UsersTable);
