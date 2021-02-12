import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = (props) => {
	return (
		<div className="mb-5">
			<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>employee management app</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to="/employee-signin">
								<Nav.Link>sign in</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
