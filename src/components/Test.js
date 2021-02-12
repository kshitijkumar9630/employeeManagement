import React, { Component } from 'react';

class Test extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			success: false,
		};
	}
	handleChange = (event) => {
		console.log(this.state);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		const data = {
			email,
			password,
		};

		const url = 'http://127.0.0.1:5000/lms/loginAdmin';

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc',
			},
			body: JSON.stringify(data),
		};

		fetch(url, requestOptions)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({
					token: data.token,
					username: data.username,
					success: String(data.success),
				});
			});

		alert('alert');
	};
	render() {
		const { email, password, username, token, success } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					email
					<input
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
					/>
					password
					<input
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
					/>
					<button type="submit">submit</button>
				</form>

				{success}
			</div>
		);
	}
}

export default Test;
