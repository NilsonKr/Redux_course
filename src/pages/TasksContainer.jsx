import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions/tasksActions';

import TasksList from '../components/Tasks';

import './styles/Tasks.css';

const TasksContainer = props => {
	useEffect(() => {
		props.getAll();
	}, []);

	return (
		<div className='tasks__container'>
			<TasksList />
		</div>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

export default connect(mapStateToProps, tasksActions)(TasksContainer);
