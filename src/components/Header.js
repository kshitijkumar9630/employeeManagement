import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#">employee management app</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#">+ add an employee</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
