import React from 'react';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Play = () => {
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
        <section id="Play">
            <div className="section" >
                <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                    <h1>Here are some things I do for fun.</h1>
                    <p>Dance</p>
                </Fade>

            </div>
        </section>
    )
}

export default Play; 