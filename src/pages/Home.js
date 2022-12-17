import { React, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Fade } from "react-awesome-reveal";
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { keyframes } from "@emotion/react";

const Home = () => {
    const [greeting, setGreeting] = useState("Hey");
    const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

    const customAnimation1 = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-8rem, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

    const [dancing, setDancing] = useState("");

    const [playing, setPlaying] = useState("");

    const [editing, setEditing] = useState("");


    return (
        <section id="Home">
            <div id="Introduction">
                <div className="section">
                    <Fade keyframes={customAnimation} duration="2000" triggerOnce={true}>
                        <div id="intro">
                            <div id="desc">
                                <Fade keyframes={customAnimation1} direction="left" duration="2200" triggerOnce={true}>
                                    <div id="intro-blurb">
                                        <div className="heading1">
                                            <h1 id="greetings" onMouseEnter={() => setGreeting("안녕")} onMouseLeave={() => setGreeting("Hey")}>{greeting}! My name is BLASETORTOISE284 𓂃✰</h1>
                                        </div>
                                        <div>
                                            <p>I'm a hands-on & curious UI/UX designer + front-end developer from REDACTED who's passionate about bringing designs that enhance the human experience to life.</p>
                                            <p>I particularly enjoy</p>
                                            <div id="hobbiesHover">
                                                <h3 className="headerHover" onMouseEnter={() => setDancing("💃")} onMouseLeave={() => setDancing("")}>DANCING {dancing}</h3>
                                                <h3 className="headerHover" onMouseEnter={() => setPlaying("🧩")} onMouseLeave={() => setPlaying("")}>PLAYING {playing}</h3>
                                                <h3 className="headerHover" onMouseEnter={() => setEditing("💻")} onMouseLeave={() => setEditing("")}>EDITING {editing}</h3>
                                            </div>
                                            <p>Check out my work below¸.*✧</p>
                                        </div>
                                    </div>
                                </Fade>

                                <div id="image">
                                    <img src={require("../assets/homeFiller.png")} />
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay="50" keyframes={customAnimation} duration="1800" triggerOnce={true}>
                        <div id="toFeatured">
                            <Link to="Featured" spy={true} smooth={true} ignoreCancelEvents={true} duration={1600} offset={-90}>
                                <button>
                                    <svg width="150" height="50" viewBox="-5 -5 90 45" preserveAspectRatio="none">
                                        <path d="M0,0 l35,30 l35,-30" fill="none" strokeWidth="10" />
                                    </svg>
                                </button>
                            </Link>

                        </div>

                    </Fade>
                </div>
            </div>


            <div id="Featured">
                <div className="section">
                    <Fade triggerOnce={true} keyframes={customAnimation} direction="up" duration={1400}>
                        <div id="featuredText" style={{zIndex: "-10"}}>
                            <h1>Featured Works</h1>
                            <p>Someƒof the things I've been working on.ᐟ.ᐟ</p>
                        </div>

                    </Fade>

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
                </div>
            </div>
        </section>
    )
}

export default Home;