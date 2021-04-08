import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as tasksActions from '../actions/tasksActions';

import TasksList from '../components/Tasks';
import DeleteModal from '../components/DeleteModal';

import './styles/Tasks.css';

const TasksContainer = props => {
	console.log(props);
	//Fetching Tasks
	useEffect(() => {
		//Turn the object to array and check it lenght to fetch or not
		if (!Object.keys(props.tasks).length) {
			console.log('hey');
			props.getAll();
		}
	}, [props.tasks]);

	return (
		<div className='task__container'>
			<Link to='/settask' className='newTask--button'>
				<button>New Task</button>
			</Link>
			<div className='tasks__layout'>
				<TasksList />
			</div>
			{props.isDeleteOpen && <DeleteModal />}
		</div>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

export default connect(mapStateToProps, tasksActions)(TasksContainer);
