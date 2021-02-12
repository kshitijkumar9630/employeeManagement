import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInImage from '../../assets/images/sign_in.svg';
class AdminSignIn extends Component {
	constructor(x) {
		super(x);
		this.state = {
			name: '',
			email: '',
		};
		// console.log(props);
	}
	handleChange = (event) => {
		// console.log(event.target.name);
		// console.log(event.target.value);
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

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc',
			},
			body: JSON.stringify(data),
		};
		fetch('http://127.0.0.1:5000/lms/loginAdmin', requestOptions)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data.token);
				if (data.success) {
					localStorage.setItem('token', JSON.stringify(data.token));
					this.props.history.push('/admin-dashboard');
				}
				this.setState({
					message: data.message,
				});
			})
			.catch('error');
	};

	render() {
		const { email, password } = this.state;
		return (
			<div>
				<Container>
					<Row>
						<Col md="6">
							<div className="mt-5 mb-5 text-center">
								<h1>admin sign in</h1>
							</div>
							<Form className="mt-5 mb-5" onSubmit={this.handleSubmit}>
								<Form.Row>
									<Form.Group as={Col} controlId="formPlaintextEmail">
										<Form.Label>Email</Form.Label>

										<Form.Control
											type="email"
											placeholder="Enter email"
											name="email"
											value={email}
											onChange={this.handleChange}
										/>
									</Form.Group>

									<Form.Group as={Col} controlId="formPlaintextPassword">
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
								{/* <p className="mt-5 text-center">{this.state.sucess}</p> */}
								<p className="mt-5 text-center">
									<Button variant="primary" type="submit">
										sign in
									</Button>
								</p>
								<p className="mt-5 text-center">
									Create a new account <Link to="/admin-signup">Sign up</Link>
								</p>
							</Form>
						</Col>

						<Col md="6 mt-5 mb-5">
							<Image src={SignInImage} fluid />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AdminSignIn;
