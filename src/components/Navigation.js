import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap/';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {

    return (
        <Navbar id="Nav" expand="lg" data-scroll-section>
            <Container id="navCont">
                <LinkContainer to="/">
                    <Navbar.Brand href="#">BLASETORTOISE284</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className="NavCollapse">
                    <Nav>
                        <LinkContainer to="/about">
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="WORK" id="basic-nav-dropdown">
                            <LinkContainer to="/responsive-redesign">
                                <NavDropdown.Item href="#action/4.1">Responsive Redesign</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/iterative-design">
                                <NavDropdown.Item href="#action/4.2">Iterative Design</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/development">
                                <NavDropdown.Item href="#action/4.3">Development</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/personas">
                                <NavDropdown.Item href="#action/4.4">Personas</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown title="PLAY" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Dance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">?</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="MORE" id="basic-nav-dropdown">
                            <LinkContainer to="/contact">
                                <NavDropdown.Item href="#action/2.1">Contact</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/resume">
                                <NavDropdown.Item href="#action/2.2">Resume</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation; 