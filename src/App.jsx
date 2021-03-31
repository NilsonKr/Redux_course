import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const apiUrl = 'https://jsonplaceholder.typicode.com/users';
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get(apiUrl).then(({ data }) => {
			setUsers(data);
		});
	}, []);

	return (
		<div className='App'>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>WebSite</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user.name}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.website}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default App;
