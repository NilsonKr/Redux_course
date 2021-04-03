import React, { useEffect } from 'react';
import { connect } from 'react-redux'; // connect redux with the component
import * as usersActions from '../actions/usersActions'; //Import all actions to modified the storage

import UsersTable from '../components/UsersTable';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Home = props => {
	useEffect(() => {
		if (!props.users.length) {
			props.getAll(); //call the action "fetchAll" wich is a promise
		}
	}, []);

	if (props.error) {
		return <Error message={props.error} />;
	}

	if (props.loading) {
		return <Loader />;
	}

	return (
		<div className='mainContainer'>
			<UsersTable />
		</div>
	);
};

const mapStateToProps = reducers => {
	return reducers.usersReducer; //define which reducer/s will called by the actions in this components
};

//before to export the component , we call the connect of redux
//and pass through it the reducers and actions necessaries in this component
export default connect(mapStateToProps, usersActions)(Home);
