import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddEmployee from './AddEmployee';
import DeleteEmployee from './EmployeeCounter';
import EmployeeTable from './EmployeeTable';

class AdminDashboard extends Component {
	render() {
		const { match } = this.props;

		return (
			<Router>
				<Container fluid>
					<Row>
						<Col md={{ span: 2 }}>
							<ListGroup>
								<ListGroup.Item>
									<Link to={`${match.path}/add-employee`}>Add Employee</Link>
								</ListGroup.Item>

								<ListGroup.Item>
									<Link to={`${match.path}/table-employee`}>
										Employee Table
									</Link>
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={{ span: 10 }}>
							<Switch>
								<Route
									path={`${match.path}/add-employee`}
									component={AddEmployee}
								/>
								<Route
									path={`${match.path}/delete-employee`}
									component={DeleteEmployee}
								/>
								<Route
									path={`${match.path}/table-employee`}
									component={EmployeeTable}
								/>
							</Switch>
						</Col>
					</Row>
				</Container>
			</Router>
		);
	}
}
export default AdminDashboard;
