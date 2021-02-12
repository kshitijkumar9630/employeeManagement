import React, { Component } from 'react';

export class EmployeeCounter extends Component {
	constructor() {
		super();
		this.state = {
			count: '',
		};
	}
	componentDidMount() {
		const url = 'http://127.0.0.1:5000/lms/totalEmployees';
		const requestOptions = {
			headers: {
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc',
			},
		};
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					count: data.count,
				})
			);
	}

	render() {
		const { count } = this.state;
		return (
			<div
				style={{
					fontFamily: 'Montserrat',
					fontWeight: '600',
					fontSize: '40px',
					color: 'white',
				}}
			>
				<p> Total Employees &nbsp;{count}</p>
			</div>
		);
	}
}

export default EmployeeCounter;
