import React from 'react';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { LinkContainer } from 'react-router-bootstrap';

const Work = () => {
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
        <section id="Work">
            <div className="section">
                <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                    <div>
                        <h1>Projects I've worked on...</h1>
                    </div>


                    <div className="display1">
                        <Fade triggerOnce={true} direction="left" duration="2000">
                            <LinkContainer to="/responsive-redesign">
                                <div className="displayCard">
                                    <img className="ind-img" src={require("../assets/rr-card.png")} />
                                    <div className="overlay">
                                        <div className="cardBody">
                                            <h3>Toronto Cupcake</h3>
                                            <h5>Canadian Cupcakery</h5>
                                            <p>Redesigning and Rebranding the Homepage for Toronto Cupcake</p>
                                            <h6>UI/UX Product Design | Branding | Problem-Solving | Front-End Development</h6>
                                        </div>
                                    </div>
                                </div>
                            </LinkContainer>
                        </Fade>

                        <Fade triggerOnce={true} direction="right" duration="2000">
                            <LinkContainer to="/iterative-design">
                                <div className="displayCard">
                                    <img className="ind-img" src={require("../assets/ir-4.png")} />
                                    <div className="overlay">
                                        <div className="cardBody">
                                            <h3>Slingshot Mobile</h3>
                                            <h5>Medical Billing YC B2B Startup</h5>
                                            <p>Designing an Interactive Mobile Prototype for Slingshot</p>
                                            <h6>UI/UX Product Design | Branding | Problem-Solving | Front-End Development</h6>
                                        </div>

                                    </div>


                                </div>
                            </LinkContainer>
                        </Fade>



                    </div>

                    <div className="display2">
                        <Fade triggerOnce={true} direction="left" duration="2000">
                            <LinkContainer to="/personas">
                                <div className="displayCard">
                                    <img className="ind-img" src={require("../assets/pp.png")} />
                                    <div className="overlay">
                                        <div className="cardBody">
                                            <h3>MyPrint Printer Release Stations</h3>
                                            <h5>Interface for Desktop Printing</h5>
                                            <p>Constructing Personas and Storyboards for User Experiences with Printer Release Stations</p>
                                            <h6>Personas | Storyboarding</h6>
                                        </div>

                                    </div>


                                </div>
                            </LinkContainer>
                        </Fade>
                        <Fade triggerOnce={true} direction="right" duration="2000">
                            <LinkContainer to="/development">
                                <div className="displayCard">
                                    <img className="ind-img" src={require("../assets/dev.png")} />
                                    <div className="overlay">
                                        <div className="cardBody">
                                            <h3>My Shoe Collection as a Store</h3>
                                            <h5>Application built using React</h5>
                                            <p>Designing and Implementing a Webpage with Functional Filtering, Sorting, and Aggregating Features</p>
                                            <h6>UI/UX Product Design | Front-End Development</h6>
                                        </div>

                                    </div>
                                </div>
                            </LinkContainer>
                        </Fade>
                    </div>

                </Fade>

            </div>
        </section>
    )
}

export default Work;