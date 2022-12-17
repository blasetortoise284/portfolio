import React from 'react';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const About = () => {
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
        <section id="About">
            <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                <div id="blurb" className="section">
                    <h1>
                        More about me!
                    </h1>

                    <div id="meImg">
                        <div id="meImgPic">
                            <img src={require("../assets/aboutMe.png")} />
                        </div>
                        <div id="meImgText">
                            <p>My name is BLASETORTOISE284, and I was born and raised in REDACTED! I am currently studying Computer Science on the design track at Brown University in Providence, Rhode Island, and I’ve explored dance, public health, chemistry, biology, programming, and, most recently, user interaction and user experience design.</p>
                            <p>I consider myself a hands-on & curious person who’s especially passionate about using problem-solving and innovation in design to improve human experiences. Since I find it fascinating how differently people process information through various forms of organization and representation, I’m constantly on the lookout for opportunities to work on projects that center users in making complex things as easy to understand as possible.</p>
                        </div>
                    </div>
                    <div id="meImgTextBottom">
                        <p>Whether it be through putting together choreography in REDACTED workshops for dancers of all and any experience, working as a UIUX designer and researcher for REDACTED, and co-leading the REDACTED team for REDACTED, I am always learning and designing through endless mediums. Particularly as a designer, I enjoy working on tangible solutions end-to-end and seeing ideas come to fruition in development. </p>
                        <h6>Through my work, I aim to create accessible, exciting, authentic, and intuitive solutions for those of all backgrounds to use.</h6>
                    </div>
                </div>

                <div id="hobbies" className="section">
                    <h1>Outside of work...</h1>
                    <div className="hobbySection">
                        <h2>I Dance!</h2>
                        <p>display dance videos/link to youtube</p>
                    </div>
                    <div className="hobbySection">
                        <h2>I Lead!</h2>
                        <p>display pictures from REDACTED club</p>
                    </div>
                    <div className="hobbySection">
                        <h2>I Edit!</h2>
                        <p>display video edits I've made</p>
                    </div>
                    <div className="hobbySectionEnd">
                        <h2>I Watch!</h2>
                        <p>display content and media I'm interested in</p>
                    </div>


                </div>
            </Fade>

        </section>
    )
}

export default About;