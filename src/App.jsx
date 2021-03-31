import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/home';

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
