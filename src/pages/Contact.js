import React from 'react';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Contact = () => {
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
        <section id="Contact">
            <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                <div className="section">
                    <h1>Say hi!</h1>
                    <p>Email: kathryn_lee@brown.edu</p>
                </div>
            </Fade>
        </section>
    )
}

export default Contact;