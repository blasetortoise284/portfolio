import { Nav, Navbar } from 'react-bootstrap/';
import * as Scroll from 'react-scroll';
import { Fade } from "react-awesome-reveal";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { keyframes } from "@emotion/react";
import React from 'react';

const StickyTracker = () => {
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
        <Navbar id="StickyTracker">

            <div id="trackerCont">
                <Fade delay={500} keyframes={customAnimation} direction="up" triggerOnce={true}>
                    <Nav>
                        <Link to="spacer" spy={true} smooth={true} ignoreCancelEvents={true} duration={1800}>
                            <button>
                                <svg className="rotate" width="100" height="50" viewBox="-10 -20 90 60" preserveAspectRatio="none">
                                    <path d="M0,0 l35,30 l35,-30" fill="none" strokeWidth="9.5" />
                                </svg>
                            </button>
                        </Link>
                    </Nav>
                </Fade>

            </div>

        </Navbar>
    )
}

export default StickyTracker;