import React from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions/tasksActions';

import NewTask from '../components/NewTask';
import Loader from '../components/Loader';
import Error from '../components/Error';

import './styles/NewTask.css';
import { Redirect } from 'react-router';

const { setQuery } = tasksActions;
const { saveTask } = tasksActions;

const NewTaskContainer = props => {
	console.log(props);

	//Change query on the props
	const changeQuery = ev => {
		const name = ev.target.name;
		const value = ev.target.value;

		props.setQuery(name, value);
	};

	//Save New task and shot the post
	const saveTask = ev => {
		const { userQuery, description } = props;
		const newTask = {
			title: description,
			userId: userQuery,
			completed: false,
		};

		props.saveTask(newTask);
	};

	return (
		<div className='newtask__container'>
			<NewTask changeQuery={changeQuery} saveTask={saveTask} />
			{props.isBack && <Redirect to='/tasks' />}
			{props.loading && <Loader />}
			{props.error && <Error message={props.error} />}
		</div>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

//Always have to be an object not a function that return a object ._.
const mapDispatchToProps = {
	setQuery,
	saveTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskContainer);
