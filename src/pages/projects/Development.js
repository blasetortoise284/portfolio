import React from 'react';
import "./projects.css";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import StickyTracker from '../../components/stickyTracker';
import { useScroll } from "framer-motion";
import Progress from '../../components/progress';

const Development = () => {
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

        <section id="Development">
            <Progress scroll={useScroll()} />
            <StickyTracker />
            <div className="section">
                <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                    <div className="projSect">
                        <h1>Development</h1>
                        <div className="headingSub">
                            <h5>DEVELOPMENT INDIVIDUAL PROJECT</h5>
                        </div>
                        <div className="projEmbedPic">
                            <div id="dev-intro">
                                <div className="dev-outer">
                                    <div className="dev-bg">
                                        <img src={require("../../assets/demoDev.gif")} />
                                    </div>
                                    <div>
                                        <img className="dev-overlay" src={require("../../assets/devBag.png")} />
                                    </div>
                                </div>
                                <div className="subtitle">
                                    <sub>Navigation through my redesign and mockups of various device screen sizes.</sub>
                                </div>
                            </div>
                        </div>
                        <h2>The Project</h2>
                        <p>The goal of this project was to develop an interactive interface, use interface components, and link the components to an internal data state by becoming familiar with React.
                            I decided to make an application that represents my current shoe collection as if it were an actual shoe store, enabling users to choose and purchase as many of their own pairs that they may desire.
                            The value in this application is that it allows users to view the kinds of shoes a current college student interested in dance and streetwear owns, possibly gain inspiration from having a personal insight to someone's closet, sort and filter these items easily according to their own interests, and be able to purchase their own pairs easily from a single webpage.</p>

                    </div>
                    <div className="projSect">
                        <h2>The Repo</h2>
                        <p>Check out my repo and readMe below to get more details!</p>
                        <div className="projEmbedPic">
                            <a target="_blank" href="https://github.com/blasetortoise284/my-shoe-collection-repo">

                                <img className="ind-img" src={require("../../assets/github.png")} />
                            </a>

                        </div>
                        <div className="subtitle">
                            <a target="_blank" href="https://github.com/blasetortoise284/my-shoe-collection-repo">My GitHub repo containing a link to the application and a ReadMe outlining the code and design principles implemented.</a>
                        </div>


                    </div>

                </Fade>

            </div>
        </section>
    )
}

export default Development;