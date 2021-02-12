import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PageNotFound from '../assets/images/page_not_found.svg';
class Error extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row className="mt-5">
						<Col>
							<Image src={PageNotFound} fluid />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default Error;
