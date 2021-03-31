import React, { useState, useEffect } from 'react';

const App = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers([
			{
				name: 'Nilson Diaz',
				email: 'nilson@kr.com',
				website: 'nilsondiaz.com',
			},
			{
				name: 'Mina',
				email: 'mina@kr.com',
				website: 'mina.com',
			},
			{
				name: 'Hirai Momo',
				email: 'momo@kr.com',
				website: 'momo.com',
			},
		]);
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
