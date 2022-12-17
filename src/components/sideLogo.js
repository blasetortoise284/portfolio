import { Navbar, Container } from 'react-bootstrap/';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';


const Sidelogo = () => {
    return (
        <aside>
            <Navbar id="Sidelogo" expand="lg" data-scroll-section>
                <Container id="sidebarCont">
                    <LinkContainer to="/">
                        <Navbar.Brand href="#"><h1>BT284</h1></Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </aside>
    )
}

export default Sidelogo;