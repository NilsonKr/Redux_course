import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Posts from './pages/Posts';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/posts/:key' component={Posts} />
					<Route exact path='/tasks' component={Tasks} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
