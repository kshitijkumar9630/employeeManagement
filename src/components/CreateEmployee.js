import React from 'react';
import { Component } from 'react';
import { Container, Col, Jumbotron, Button, Form } from 'react-bootstrap';

class CreateEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}
	handleChange = (event) => {
		console.log(event.target.name);
		console.log(event.target.value);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		const { name, email, password } = this.state;
		event.preventDefault();

		const data = {
			name,
			email,
			password,
		};

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc',
			},
			body: JSON.stringify(data),
		};
		fetch('http://127.0.0.1:5000/lms/admin', requestOptions)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					message: data.message,
				})
			)
			.catch('error');
	};

	render() {
		console.log(this.state);

		const { name, email, password } = this.state;

		return (
			<div>
				<Container>
					<Jumbotron className="mt-5">
						<h1 className="text-center">admin sign up</h1>
					</Jumbotron>

					<Form onSubmit={this.handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Name"
									name="name"
									value={name}
									onChange={this.handleChange}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									name="email"
									value={email}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									name="password"
									value={password}
									onChange={this.handleChange}
								/>
							</Form.Group>
						</Form.Row>
						<p className="mt-5 text-center">{this.state.message}</p>
						<p className="mt-5 text-center">
							<Button variant="primary" type="submit">
								submit
							</Button>
						</p>
					</Form>
				</Container>
			</div>
		);
	}
}

export default CreateEmployee;
