import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ImageOne from '../assets/images/done_checking.svg';
import ImageTwo from '../assets/images/online_organizer.svg';
import ImageThree from '../assets/images/ideas_flow.svg';

class Homepage extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col md="6 mt-5 mb-5">
							<Image src={ImageOne} fluid />
						</Col>
						<Col md="6 mt-5 mb-5">
							<h3>employee insignts</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</Col>
					</Row>
					<Row>
						<Col md="6 mt-5 mb-5">
							<h3>data organization</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</Col>
						<Col md="6 mt-5 mb-5">
							<Image src={ImageTwo} fluid />
						</Col>
					</Row>
					<Row>
						<Col md="6 mt-5 mb-5">
							<Image src={ImageThree} fluid />
						</Col>
						<Col md="6 mt-5 mb-5">
							<h3>strategic planning</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default Homepage;
