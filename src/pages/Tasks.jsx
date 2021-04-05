import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions/tasksActions';

const Tasks = props => {
	console.log(props);

	useEffect(() => {
		props.getAll();
	}, []);

	return (
		<div className='mainContainer'>
			<h1>You Are on the tasks Section</h1>
		</div>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);
