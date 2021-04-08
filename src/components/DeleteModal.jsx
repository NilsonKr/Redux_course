import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as tasksActions from '../actions/tasksActions';

import './styles/deleteModal.css';

const DeleteModal = props => {
	console.log(props);

	return ReactDOM.createPortal(
		<div className='deletemodal__bg'>
			<div className='deletemodal__container'>
				<h1>Are You Sure ?</h1>
				<div className='options--container'>
					<button className='edit--button ' onClick={() => props.openDelete()}>
						Cancel
					</button>
					<button className='remove--button '>Delete</button>
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(DeleteModal);
