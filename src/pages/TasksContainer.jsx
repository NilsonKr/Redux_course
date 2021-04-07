import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as tasksActions from '../actions/tasksActions';

import TasksList from '../components/Tasks';

import './styles/Tasks.css';

const TasksContainer = props => {
	//Fetching Tasks
	useEffect(() => {
		props.getAll();
	}, []);

	return (
		<div className='task__container'>
			<Link to='/settask' className='newTask--button'>
				<button>New Task</button>
			</Link>
			<div className='tasks__layout'>
				<TasksList />
			</div>
		</div>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

export default connect(mapStateToProps, tasksActions)(TasksContainer);
