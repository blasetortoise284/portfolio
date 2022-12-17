import React from 'react';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import StickyTracker from '../../components/stickyTracker';
import { useScroll } from "framer-motion";
import Progress from '../../components/progress';

const ResponsiveRedesign = () => {
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
        <section id="ResponsiveRedesign">
            <Progress scroll={useScroll()} />
            <StickyTracker />
            <div className="section">
                <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                    <div >
                        <div className="projSect">
                            <h1>Toronto Cupcake</h1>
                            <div className="headingSub">
                                <h5>RESPONSIVE REDESIGN INDIVIDUAL PROJECT</h5>
                            </div>

                            <div className="projEmbedPic">
                                <div id="rr-intro">
                                    <div className="rr-outer">
                                        <div className="rr-bg">
                                            <img src={require("../../assets/rr-redesign.gif")} />
                                        </div>
                                        <div>
                                            <img className="rr-overlay" src={require("../../assets/rr-overlay.png")} />
                                        </div>
                                    </div>
                                    <div className="subtitle">
                                        <sub>Navigation through my redesign and mockups of various device screen sizes.</sub>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="theProject" className="projSect">
                        <h2>The Project</h2>
                        <div className="subsection">

                            <h3>Choosing and Planning</h3>
                            <p>The goal of this project was to <b>practice the workflow of redesigning a simple website</b> by analyzing and identifying issues in an existing interface, creating low-fidelity and high-fidelity prototypes for various screen sizes, and building a responsive resulting product based on those prototypes. </p>
                            <div className="grid">
                                <div className="textFill">
                                    <p>In choosing a website to modify, I kept in mind some of the key aspects that come with good web design: <b>usability, high-quality content, and an intuitive layout</b>. With Toronto Cupcake, I found that much of the homepage did not feel very intuitive to interact with and lacked information about professionalism, their brand identity, as well as the quality and types of products they provide. </p>
                                    <p>After coming across Toronto Cupcake, I wanted to explore how I could redesign their website to consist of a stronger brand identity, clearer product presentation, as well as a cleaner layout that follows a logical hierarchy of text and information. </p>
                                </div>

                                <div className="projEmbedPic evenPadding">
                                    <div id="rr-refPic">
                                        <img className="ind-img" src={require("../../assets/torontoOrg.png")} />
                                        <div className="subtitle">
                                            <a className="sub" target="_blank" href="https://www.torontocupcake.com">Toronto Cupcake's Homepage</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="subsection-end">
                            <h3>About the Webpage</h3>
                            <p>As mentioned previously, some of the major issues I took notice entailed a <b>lack of quality and intuition</b> with both the content and organization of information throughout the homepage. To take this further, I also conducted a heuristic evaluation of the cupcakery's current homepage design. </p>
                            <p>Problems I noticed include:</p>
                            <ul>
                                <li><b>Lack of flexibility and efficiency</b>: navigation bar cannot be accessed with scrolling down page (cannot access other pages or shopping cart easily)</li>
                                <li><b>Lack of aesthetic and minimalist design</b>: cluttered information, minimal information hierarchy, inconsistent spacing</li>
                                <li><b>Lack of consistency and standards</b>: does not follow familiar conceptual model of homepage typically present in baked good business websites (ex: recommendations, visuals of cupcakes available, credibility, etc.)</li>
                            </ul>

                            <div className="picWrapper">
                                <div className="projEmbedPic">
                                    <div className="two-img">
                                        <div className="two-img-spacing">
                                            <img className="ind-img" src={require("../../assets/homepage.gif")} />
                                            <div className="subtitle special">
                                                <sub>Navigation bar disappears as you scroll down, cluttering of footer information and minimal information hierarchy. </sub>
                                            </div>

                                        </div>
                                        <div className="two-img-spacing">
                                            <div>
                                                <img className="ind-img" src={require("../../assets/inspect.gif")} />
                                                <div className="subtitle special">
                                                    <sub>Inconsistencies in the spacing (margins) of the homepage information containers.</sub>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>Additionally, I further analyzed the usability of the original page using WebAIM WAVE to detect any accessibility problems. While there were no major errors detected, some alerts that popped up were: </p>
                            <ul>
                                <li><b>Suspicious link text</b> in the header</li>
                                <li><b>Device dependent event handler</b> in the navigation bar</li>
                                <li><b>Redundant links</b> in the second image and description</li>
                            </ul>
                            <p>Most of these were not of huge concern, especially considering the aspect of having multiple ways for a user to access a page or link can be helpful when executed properly. Having a device dependent event handler could raise an issue, however, as one feature this project largely focused on is responsiveness and adaptability. </p>
                            <p>While the software is useful in deciding pain-points to target for the redesign, I don't believe relying only on WebAIM WAVE or similar applications to recognize accessibility issues is the most reliable way of doing so.</p>

                        </div>
                    </div>

                    <div className="projSect">
                        <h2>Ideation</h2>
                        <div className="subsection">
                            <h3>Lo-Fi Wireframing</h3>
                            <p>From my observations, I went on to sketch out <b>three Lo-Fi wireframes</b> for a new Toronto Cupcake homepage. After a few iterations, I ultimately decided on a wireframe that consisted of multiple sections containing:</p>
                            <div className="grid-unevenL">
                                <div className="projEmbedPic evenPadding">
                                    <div id="rr-lofi">
                                        <img className="ind-img" src={require("../../assets/rr-lofi.jpg")} />
                                        <div className="subtitle">
                                            <sub>Homepage Lo-Fi wireframes created in Balsamiq across three device screen types.</sub>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li><b>a diverse navigation bar</b>: additional tabs, logo toggle to home, account and shopping cart access</li>
                                    <li><b>small overviews on products provided</b>: shop by category and/or best sellers</li>
                                    <li><b>Toronto Cupcake's offered features and credibility</b>: delivery, packaging, and quality</li>
                                    <li><b>an organized footer</b>: contact information and additional anchor links</li>
                                </ul>
                            </div>


                        </div>


                        <div className="subsection">
                            <h3>Style Guide</h3>
                            <div className="grid-unevenR">
                                <div>

                                    <p>Before starting on my hi-fi prototype, I created <b>a visual design style guide</b> in Figma that consists of the <b>main page colors, font families and typography</b>, as well as <b>reusable elements</b> like buttons, anchor links, and icons used throughout the page. </p>
                                    <p>I extended upon the current color scheme of the website, introduced more discrete text hierarchies, and explored a variety of interactive components to include on the page.</p>
                                </div>

                                <div className="projEmbedPic evenPadding">
                                    <div id="rr-style">
                                        <img className="ind-img" src={require("../../assets/rr-styleguide.jpg")} />
                                        <div className="subtitle">
                                            <sub>Visual style guide created in Figma.</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="subsection-end">
                            <h3>Hi-Fi Prototyping</h3>
                            <p>I created <b>three Hi-Fi prototypes</b> for the homepage with the Lo-Fi wireframes and style guide in mind, focusing on reusability between the webpage elements between screen sizes:</p>
                            <div className="projEmbedPic">
                                <div id="rr-hifi">
                                    <div className="two-img" style={{ gap: "0rem" }}>
                                        <div>
                                            <img className="ind-img" src={require("../../assets/rr-hifi1.png")} />
                                        </div>
                                        <div>
                                            <img className="ind-img" src={require("../../assets/rr-hifi2.png")} />
                                        </div>
                                    </div>
                                    <div className="subtitle">
                                        <sub>Homepage Hi-Fi prototypes created and annotated in Figma across three device screen types.</sub>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="projSect-end">
                        <h2>Conclusion</h2>
                        <div className="subsection">
                            <h3>The Final Responsive Design</h3>
                            <p>After annotating my prototypes and finalizing my style guide, I used <b>HTML, CSS, and Bootstrap</b> to implement my redesign of the live site as shown in the header, as well as below here (desktop versions). I deployed my page through GitHub Pages: </p>
                            <div className="projEmbedPic">
                                <div id="rr-demo">
                                    <img className="ind-img" src={require("../../assets/redesign.png")} />
                                    <div className="subtitle">
                                        <a href="https://blasetortoise284.github.io/responsive_redesign/">My redesign of Toronto Cupcake</a>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="subsection-end">
                            <h3>Reflection</h3>
                            <p>The biggest challenge I had with this project was <b>bridging between my design and coding process</b>, as it was more difficult than I had initially anticipated in trying to account for what I would have to develop on the front-end while simultaneously implementing quality UIUX and web design practices. Additionally, I have not had much practice with the coding languages involved previously, so there were <b>a few responsive bugs</b> I had trouble with coordinating between the multiple breakpoints (desktop, tablet, and mobile) in ensuring certain elements did not overflow their containers or scaled up/down proportionally. I also found that I had to exclude certain responsive elements I had planned to implement from the Lo-Fi wireframes, like the collapsing pattern of footer information organization, because of my lack of foresight in what components HTML and CSS are actually capable of executing. Moving forward, I hope to plan further in advance and take better advantage of layout features like grids and proportions to account for more successful and reasonable responsiveness in my interfaces.</p>
                            <p>On another note, I would like to revisit this project or approach a similar one in the future having conducted a <b>case study</b> to get more input on what <b>users and stakeholders</b> are actually looking for from interfaces like Toronto Cupcakes. Particularly, I'd like to hear the original designer's and/or designers' <b>motivation and process</b> of generating such websites with these UIUX features that I analyzed through this project. </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default ResponsiveRedesign;