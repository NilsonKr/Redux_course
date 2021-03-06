import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';

const store = createStore(
	reducers, //Reducers
	{}, // Initial State
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
