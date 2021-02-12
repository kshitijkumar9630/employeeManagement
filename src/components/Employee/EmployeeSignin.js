import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInImage from '../../assets/images/sign_in.svg';
class EmployeeSignin extends Component {
	constructor() {
		super();
		this.state = {
			empid: '',
			password: '',
		};
	}
	handleChangeEmp = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		// console.log(event.target.name);
		// console.log(event.target.value);
	};
	handleSubmitEmp = (event) => {
		event.preventDefault();
		console.log(this.state);

		const { empid, password } = this.state;

		const data = {
			empid,
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

		fetch('http://127.0.0.1:5000/lms/loginEmp', requestOptions)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.success === true) {
					this.props.history.push('/employee-homepage');
				} else {
					this.setState({
						message: data.error,
					});
				}
			});
	};
	render() {
		const { empid, password } = this.state;
		return (
			<div>
				<Container>
					<Row>
						<Col md="6">
							<div className="mt-5 mb-5 text-center">
								<h1>Employee sign in</h1>
							</div>
							<Form className="mt-5 mb-5" onSubmit={this.handleSubmitEmp}>
								<Form.Row>
									<Form.Group as={Col} controlId="formPlaintextEmail">
										<Form.Label>Employee Id</Form.Label>

										<Form.Control
											type="text"
											placeholder="Employee Id"
											name="empid"
											value={empid}
											onChange={this.handleChangeEmp}
										/>
									</Form.Group>

									<Form.Group as={Col} controlId="formPlaintextPassword">
										<Form.Label>Password</Form.Label>

										<Form.Control
											type="password"
											placeholder="Password"
											name="password"
											value={password}
											onChange={this.handleChangeEmp}
										/>
									</Form.Group>
								</Form.Row>
								<p className="mt-5 text-center">{this.state.message}</p>

								<p className="mt-5 text-center">
									<Button variant="primary" type="submit">
										sign in
									</Button>
								</p>
								<p className="mt-5 text-center">
									Admin <Link to="/admin-signin">Sign in</Link>
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

export default EmployeeSignin;
