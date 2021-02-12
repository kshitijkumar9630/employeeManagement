import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
class AddEmployee extends Component {
	constructor() {
		super();
		this.state = {
			qci_id: '',
			name: '',
			email: '',
			board: '',
			designation: '',
			type_of_employee: 'Regular',

			gender: '',
			bal_cl: '',
			bal_sl: '',
			bal_pl: '',
			bal_ml: '',
			bal_ptl: '',
			bal_eol: '',
			password: '',
		};
	}

	handleChange = (event) => {
		// console.log(event.target.name);
		// console.log(event.target.value);
		this.setState(
			{
				[event.target.name]: event.target.value,
			}
			// console.log(this.state)
		);
	};
	// handleRadioChange = (event) => {
	// 	this.setState(
	// 		{
	// 			[event.target.name]: event.target.value,
	// 		},
	// 		console.log(this.state)
	// 	);
	// };

	handleSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state);

		const {
			qci_id,
			name,
			email,
			board,
			designation,
			type_of_employee,
			gender,
			bal_cl,
			bal_sl,
			bal_pl,
			bal_ml,
			bal_ptl,
			bal_eol,
			password,
		} = this.state;

		const data = {
			qci_id,
			name,
			email,
			board,
			designation,
			type_of_employee,
			gender,
			bal_cl,
			bal_sl,
			bal_pl,
			bal_ml,
			bal_ptl,
			bal_eol,
			password,
		};
		const url = 'http://127.0.0.1:5000/lms/addEmployee';
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
					message: data.message,
				});
			})
			.catch('error');
		console.log(this.state);
	};

	render() {
		const {
			qci_id,
			name,
			email,
			board,
			designation,
			type_of_employee,
			bal_cl,
			bal_sl,
			bal_pl,
			bal_ml,
			bal_ptl,
			bal_eol,
			password,
		} = this.state;
		const genderValues = ['Male', 'Female', 'Other'];
		return (
			<div>
				<p className="text-center mt-5 mb-5">
					{this.state.message && this.state.message}
				</p>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							QCI ID
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="text"
								name="qci_id"
								vaulue={qci_id}
								onChange={this.handleChange}
								placeholder="QCI ID"
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Name
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="text"
								name="name"
								value={name}
								onChange={this.handleChange}
								placeholder="Name"
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Email
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={this.handleChange}
								placeholder="Email"
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Password
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="password"
								name="password"
								value={password}
								onChange={this.handleChange}
								placeholder="Password"
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Board
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="text"
								name="board"
								value={board}
								onChange={this.handleChange}
								placeholder="Board"
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Designation
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="text"
								name="designation"
								value={designation}
								onChange={this.handleChange}
								placeholder="Designation"
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Type of Employee
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								as="select"
								name="type_of_employee"
								value={type_of_employee}
								onChange={this.handleChange}
							>
								<option>Regular</option>
								<option>Professional</option>
								<option>Contract</option>
							</Form.Control>
						</Col>
					</Form.Group>

					<fieldset>
						<Form.Group as={Row}>
							<Form.Label as="legend" column sm={4}>
								Gender
							</Form.Label>
							<Col sm={6}>
								{genderValues.map((gender) => (
									<>
										<Form.Check
											type="radio"
											label={gender}
											name="gender"
											value={gender}
											onChange={this.handleChange}
										/>
									</>
								))}
							</Col>
						</Form.Group>
					</fieldset>

					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Balace Casual Leave of Employee
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="number"
								name="bal_cl"
								value={bal_cl}
								onChange={this.handleChange}
								placeholder="bal_cl"
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Balance Sick Leave of Employee
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="number"
								name="bal_sl"
								value={bal_sl}
								onChange={this.handleChange}
								placeholder="bal_sl"
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Balance Privilage Leave of Employee
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="number"
								name="bal_pl"
								value={bal_pl}
								onChange={this.handleChange}
								placeholder="bal_pl"
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Balance Maternity Leave only for Female Employee
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="number"
								name="bal_ml"
								value={bal_ml}
								onChange={this.handleChange}
								placeholder="bal_ml"
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Balance Paternity Leave only for Male Employees
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="number"
								name="bal_ptl"
								value={bal_ptl}
								onChange={this.handleChange}
								placeholder="bal_ptl"
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={4}>
							Balance Extraordinary Leave for Employee
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="number"
								name="bal_eol"
								value={bal_eol}
								onChange={this.handleChange}
								placeholder="bal_eol"
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Col sm={{ span: 8, offset: 3 }}>
							<Button type="submit">add employee</Button>
						</Col>
					</Form.Group>
				</Form>
			</div>
		);
	}
}

export default AddEmployee;
