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
        <Navbar id="Footer" expand="lg">


            <div id="footerSect">
                <Fade>
                    <div id="footerImg">
                        <div className="star">
                            <img src={require("../assets/cute-3d-star-decoration-png.png")} />
                        </div>

                        <Link id="footerBg" to="/">
                            <img src={require("../assets/footerFiller.png")} />
                        </Link>
                        <div className="subtitle">
                            <p>thanks for stopping by 𐊮:</p>
                        </div>

                    </div>

                </Fade>

                <Fade direction="up" keyframes={customAnimation}>
                    <section id="footerNav">
                        <h1>NAVIGATION</h1>
                        <div className="anchorLinks footText">
                            <LinkContainer to="/about">
                                <Nav.Link href="/about">ABOUT</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/work">
                                <Nav.Link href="#work">WORK</Nav.Link>
                            </LinkContainer>


                            <LinkContainer to="/resume">
                                <Nav.Link disabled href="/resume"><strike>RESUME</strike></Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/play">
                                <Nav.Link disabled href="/play"><strike>PLAY</strike></Nav.Link>
                            </LinkContainer>
                        </div>

                    </section>

                    <section id="footerCon">

                        <h1>CONTACT</h1>
                        <div className="anchorLinks footText">
                            <Nav.Link target="_blank" href="https://github.com/blasetortoise284">GITHUB</Nav.Link>
                            <LinkContainer to="/work">
                                <Nav.Link disabled href="/work"><strike>EMAIL</strike></Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/">
                                <Nav.Link disabled href="/instagram"><strike>LINKEDIN</strike></Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/resume">
                                <Nav.Link disabled href="/resume"><strike>BEHANCE</strike></Nav.Link>
                            </LinkContainer>
                        </div>


                    </section>
                </Fade>
            </div>
        </Navbar>
    )
}

export default Footer;
