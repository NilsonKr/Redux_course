import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import TasksContainer from './pages/TasksContainer';
import Posts from './pages/Posts';
import NewTaskContainer from './pages/NewTaskContainer';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/posts/:key' component={Posts} />
					<Route exact path='/tasks' component={TasksContainer} />
					<Route exact path='/settask' component={NewTaskContainer} />
					<Route
						exact
						path='/settask/edit/:userId/:taskId'
						component={NewTaskContainer}
					/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
