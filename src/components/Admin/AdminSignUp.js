import React from 'react';

import { Component } from 'react';
import { Container, Col, Row, Button, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SignUpImage from '../../assets/images/sign_up.svg';

class AdminSignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}
	handleChange = (event) => {
		// console.log(event.target.name);
		// console.log(event.target.value);
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
		// console.log(this.state);

		const { name, email, password } = this.state;

		return (
			<div>
				<Container>
					<Row>
						<Col md="6">
							<div className="mt-5 mb-5 text-center">
								<h1>admin sign up</h1>
							</div>

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
										sign up
									</Button>
								</p>
								<p className="mt-5 text-center">
									Aready have an account <Link to="/admin-signin">Sign in</Link>
								</p>
							</Form>
						</Col>
						<Col md="5 mt-5 mb-5">
							<Image src={SignUpImage} fluid />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AdminSignUp;
