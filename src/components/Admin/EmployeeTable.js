import React, { Component } from 'react';
import {
	Table,
	Button,
	Modal,
	Toast,
	Jumbotron,
	Row,
	Col,
	Form,
} from 'react-bootstrap';

import EmployeeCounter from './EmployeeCounter';
export class EmployeeTable extends Component {
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

			empData: [],
			showDeleteModal: false,
			showDeleteToast: false,
			showEditModal: false,
			showEditToast: false,
		};
	}

	componentDidMount() {
		const url = 'http://127.0.0.1:5000/lms/employeeDetails';

		const requestOptions = {
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc',
			},
		};

		fetch(url, requestOptions)
			.then((result) => result.json())
			.then((data) => {
				this.setState({
					empData: data.data,
				});
			})
			.catch('error');
	}

	deleteEmployeeTrigger = (qci_id) => {
		this.setState({
			delete_qci_id: qci_id,
			showDeleteModal: true,
		});
	};

	deleteEmployee = () => {
		const { empData, delete_qci_id } = this.state;

		const data = {
			qci_id: delete_qci_id,
		};

		const url = 'http://127.0.0.1:5000/lms/deleteEmployee';

		const requrestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc',
			},
			body: JSON.stringify(data),
		};

		fetch(url, requrestOptions)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					delete_message: data.message,
					empData: empData.filter(
						(tableItems) => tableItems.qci_id !== delete_qci_id
					),
					showDeleteModal: false,
					showDeleteToast: true,
				})
			);
	};

	editEmployeeTrigger = (qci_id) => {
		this.setState({
			edit_qci_id: qci_id,
			showEditModal: true,
		});
	};
	handleEditChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	editEmployee = (event) => {
		event.preventDefault();

		const {
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
			edit_qci_id,
			empData,
		} = this.state;

		const data = {
			qci_id: edit_qci_id,
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

		const url = 'http://127.0.0.1:5000//lms/editEmployeeDetails';
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
					edit_message: data.message,
					empData: [...empData],

					showEditModal: false,
					showEditToast: true,
				});
			})
			.catch('error');
		console.log(this.state.showEditModal);
	};

	onSort = (sortKey) => {
		const { empData } = this.state;

		empData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
		this.setState({ empData });
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
			empData,
			delete_message,
			edit_message,
			showDeleteModal,
			showEditModal,
			showDeleteToast,
			showEditToast,
		} = this.state;
		const genderValues = ['Male', 'Female', 'Other'];
		return (
			<div
				aria-live="polite"
				aria-atomic="true"
				style={{
					position: 'relative',
					minHeight: '100px',
				}}
			>
				<Jumbotron className="text-center" style={{ background: '#1a1a1a' }}>
					<EmployeeCounter />
				</Jumbotron>
				<Table hover responsive>
					<thead>
						<tr className="table-active">
							<th onClick={() => this.onSort('qci_id')}>qci id</th>
							<th onClick={() => this.onSort('name')}>name</th>
							<th onClick={() => this.onSort('designation')}>designation</th>
							<th onClick={() => this.onSort('board')}>board</th>
							<th onClick={() => this.onSort('type_of_employee')}>
								employee type
							</th>
							<th onClick={() => this.onSort('email')}>email</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{empData.map((data) => (
							<tr>
								<td>{data.qci_id}</td>
								<td>{data.name}</td>
								<td>{data.designation}</td>
								<td>{data.board}</td>
								<td>{data.type_of_employee}</td>
								<td>{data.email}</td>
								<td>
									<Button
										variant="primary"
										onClick={() => this.editEmployeeTrigger(data.qci_id)}
									>
										edit
									</Button>
								</td>
								<td>
									<Button
										variant="primary"
										onClick={() => this.deleteEmployeeTrigger(data.qci_id)}
									>
										delete
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>

				<Modal
					show={showDeleteModal}
					onHide={() => this.setState({ showDeleteModal: false })}
					centered
					className="text-center"
				>
					<Modal.Header closeButton>
						<Modal.Title>Delete Employee</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Are you sure you want to delete?</p>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={() => this.setState({ showDeleteModal: false })}
						>
							cancel
						</Button>
						<Button
							variant="primary"
							onClick={() => {
								this.deleteEmployee();
							}}
						>
							delete
						</Button>
					</Modal.Footer>
				</Modal>

				<Modal
					show={showEditModal}
					onHide={() => this.setState({ showEditModal: false })}
					centered
					size="lg"
				>
					<Form onSubmit={this.editEmployee}>
						<Modal.Header closeButton>
							<Modal.Title>Edit Employee</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									QCI ID
								</Form.Label>
								<Col sm={7}>
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
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Name
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="text"
										name="name"
										value={name}
										onChange={this.handleEditChange}
										placeholder="Name"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Email
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="email"
										name="email"
										value={email}
										onChange={this.handleEditChange}
										placeholder="Email"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Password
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="password"
										name="password"
										value={password}
										onChange={this.handleEditChange}
										placeholder="Password"
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Board
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="text"
										name="board"
										value={board}
										onChange={this.handleEditChange}
										placeholder="Board"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Designation
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="text"
										name="designation"
										value={designation}
										onChange={this.handleEditChange}
										placeholder="Designation"
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Type of Employee
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										as="select"
										name="type_of_employee"
										value={type_of_employee}
										onChange={this.handleEditChange}
									>
										<option>Regular</option>
										<option>Professional</option>
										<option>Contract</option>
									</Form.Control>
								</Col>
							</Form.Group>

							<fieldset>
								<Form.Group as={Row}>
									<Form.Label column sm={{ span: 3, offset: 1 }}>
										Gender
									</Form.Label>
									<Row sm={7} className="ml-3">
										{genderValues.map((gender) => (
											<>
												<Form.Check
													inline
													type="radio"
													label={gender}
													name="gender"
													value={gender}
													onChange={this.handleEditChange}
												/>
												&nbsp;
											</>
										))}
									</Row>
								</Form.Group>
							</fieldset>
							<p className="mt-3 mb-3 text-center">Balance</p>
							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Casual Leave
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="number"
										name="bal_cl"
										value={bal_cl}
										onChange={this.handleEditChange}
										placeholder="bal_cl"
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Sick Leave
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="number"
										name="bal_sl"
										value={bal_sl}
										onChange={this.handleEditChange}
										placeholder="bal_sl"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Privilage Leave
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="number"
										name="bal_pl"
										value={bal_pl}
										onChange={this.handleEditChange}
										placeholder="bal_pl"
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Maternity Leave
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="number"
										name="bal_ml"
										value={bal_ml}
										onChange={this.handleEditChange}
										placeholder="bal_ml"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Paternity Leave
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="number"
										name="bal_ptl"
										value={bal_ptl}
										onChange={this.handleEditChange}
										placeholder="bal_ptl"
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row}>
								<Form.Label column sm={{ span: 3, offset: 1 }}>
									Extraordinary Leave
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="number"
										name="bal_eol"
										value={bal_eol}
										onChange={this.handleEditChange}
										placeholder="bal_eol"
									/>
								</Col>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="secondary"
								onClick={() => this.setState({ showEditModal: false })}
							>
								cancel
							</Button>
							<Button variant="primary" type="submit">
								save changes
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>

				<Toast
					onClose={() => this.setState({ showDeleteToast: false })}
					show={showDeleteToast}
					delay={3000}
					autohide
					className="ml-auto"
					style={{
						position: 'absolute',
						top: '2vh',
						right: 0,
					}}
				>
					<Toast.Header>
						<strong className="mr-auto">Message</strong>
					</Toast.Header>
					<Toast.Body>{delete_message}</Toast.Body>
				</Toast>
				<Toast
					onClose={() => this.setState({ showEditToast: false })}
					show={showEditToast}
					delay={3000}
					autohide
					className="ml-auto"
					style={{
						position: 'absolute',
						top: '2vh',
						right: 0,
					}}
				>
					<Toast.Header>
						<strong className="mr-auto">Message</strong>
					</Toast.Header>
					<Toast.Body>{edit_message}</Toast.Body>
				</Toast>
			</div>
		);
	}
}

export default EmployeeTable;
