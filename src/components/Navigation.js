import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap/';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar id="Nav" expand="lg">
            <Container id="navCont">
                <LinkContainer to="/">
                    <Navbar.Brand href="#"><h1>BT284</h1></Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className="NavCollapse">
                    <Nav>
                        <LinkContainer className="options" to="/about">
                            <Nav.Link className="navHeading" href="#about">ABOUT</Nav.Link>
                        </LinkContainer>

                        <NavDropdown align="end" title="WORK" className="navHeading" id="basic-nav-dropdown">
                            <LinkContainer to="/responsive-redesign">
                                <NavDropdown.Item className="navText" href="#action/4.1">Responsive Redesign</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/iterative-design">
                                <NavDropdown.Item className="navText" href="#action/4.2">Iterative Design</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/development">
                                <NavDropdown.Item className="navText" href="#action/4.3">Development</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/personas">
                                <NavDropdown.Item className="navText" href="#action/4.4">Personas</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown align="end" title="PLAY" className="navHeading" id="basic-nav-dropdown">
                            <NavDropdown.Item className="navText" disabled href="#action/2.1">Dance</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown align="end" title="MORE" className="navHeading" id="basic-nav-dropdown">
                            <LinkContainer to="/contact">
                                <NavDropdown.Item className="navText" disabled href="#action/2.1">Contact</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/resume">
                                <NavDropdown.Item className="navText" disabled href="#action/2.2">Resume</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation; 