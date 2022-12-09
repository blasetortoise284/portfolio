import React from 'react';
import { Nav, Navbar } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Footer = () => {
    const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 5rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
    return (
        <Navbar id="Footer" expand="lg" data-scroll-section>
            <div id="footerSect">
                <Fade>
                    <div id="footerImg">
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '../images/footerFiller.png'} />
                        </Link>
                        <p>thanks for stopping by 𐊮:</p>
                    </div>
                </Fade>

                <Fade direction="up" keyframes={customAnimation}>
                    <div id="footerBlock">
                        <section id="footerNav">

                            <h1>NAVIGATION</h1>
                            <div className="anchorLinks">
                                <LinkContainer to="/about">
                                    <Nav.Link href="/about">ABOUT</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/work">
                                    <Nav.Link href="#work">WORK</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/play">
                                    <Nav.Link href="/play">PLAY</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/resume">
                                    <Nav.Link href="/resume">RESUME</Nav.Link>
                                </LinkContainer>
                            </div>

                        </section>

                        <section id="footerCon">

                            <h1>CONTACT</h1>
                            <div className="anchorLinks">
                                <LinkContainer to="/about">
                                    <Nav.Link href="/about">LINKEDIN</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/work">
                                    <Nav.Link href="/work">EMAIL</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/">
                                    <Nav.Link href="/instagram">INSTAGRAM</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/resume">
                                    <Nav.Link href="/resume">BEHANCE</Nav.Link>
                                </LinkContainer>
                            </div>


                        </section>
                    </div>
                </Fade>

            </div>

        </Navbar>
    )
}

export default Footer;
