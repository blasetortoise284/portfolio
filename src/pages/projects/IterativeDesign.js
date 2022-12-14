import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import IDCarousel from '../../components/IDCarousel';
import StickyTracker from '../../components/stickyTracker';
import { useScroll } from "framer-motion";
import Progress from '../../components/progress';
import Collapse from 'react-bootstrap/Collapse';
import Dropdown from 'react-bootstrap/Dropdown';


const IterativeDesign = () => {
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
    const [open1, setOpen1] = useState(false);

    const [open2, setOpen2] = useState(false);

    const handleClick = (bool) => {
        if (bool) {
            return ("Read Less")
        } else {
            return ("Read More")
        }
    }

    const [open3, setOpen3] = useState(false);

    const [open4, setOpen4] = useState(false);

    const [open5, setOpen5] = useState(false);

    const [open6, setOpen6] = useState(false);

    const [open7, setOpen7] = useState(false);

    const [open8, setOpen8] = useState(false);



    return (
        <section id="IterativeDesign">
            <Progress scroll={useScroll()} />
            <StickyTracker />
            <div className="section">
                <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                    <div className="projSect">
                        <h1>Slingshot</h1>
                        <div className="headingSub">
                            <h5>ITERATIVE DESIGN GROUP PROJECT</h5>
                        </div>
                        <div className="projEmbedPic">
                            <div className="id-intro">
                                <img className="id-intro-img" src={require("../../assets/id-prototype.png")} />
                                <div className="subtitle">
                                    <sub>The homepage of our mobile prototype for Slingshot.</sub>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="projSect">
                        <h2>The Startup</h2>
                        <div className="subsection">
                            <h3>Our Project</h3>
                            <p>For this project, we chose to design a mobile interface for <a target="_blank" href="https://www.ycombinator.com/companies/slingshot">Slingshot</a>, a YC startup that utilizes software that automatically monitors and reduces people's medical bills.</p>
                            <div className="projEmbedPic">
                                <img className="ind-img" src={require("../../assets/slingshotAbout.png")} />

                            </div>
                            <div className="subtitle">
                                <sub>Slingshot's mission statement.</sub>
                            </div>
                        </div>

                        <div className="subsection-end">
                            <h3>The Product</h3>
                            <p>With Slingshot, users can sign up and connect their insurance. The software will then begin to automatically monitor all claims processed by the user’s insurance and will notify the user when they are being overcharged for errors, up-codes, uncovered costs, and negotiable items. From these notifications, users have the option of enabling Slingshot to correct and lower their medical bills. Users can also upload medical bills directly and opt in for automatic insurance claim monitoring.</p>
                            <div className="projEmbedPic">
                                <img className="ind-img" src={require("../../assets/slingshot.gif")} />
                            </div>
                            <div className="subtitle">
                                <sub>Slingshot's demo of their current notification system.</sub>
                            </div>

                        </div>


                    </div>

                    <div className="projSect">
                        <h2>Background</h2>
                        <div className="subsection">
                            <h3>Prototype Selection</h3>
                            <p>We decided to focus on the direct user interactions of Slingshot, where users easily access information on their medical bill savings. As a result, we decided to create a mobile interface for Slingshot, since mobile interfaces are accessible to any smartphone user, for easy, everyday use, and they allow for real-time state monitoring through push notifications. </p>

                        </div>

                        <div className="subsection-end">


                            <h3>Users Impacted</h3>
                            <p>Because Slingshot is focused around consumer health services, there's a wide range of potential users who would be impacted by our interface:</p>
                            <ul>
                                <li>
                                    <b>Financially stable folks with insurance</b> (either through employment or personal payment)
                                    <a className="pageButton"
                                        onClick={() => { setOpen1(!open1) }}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open1}
                                    >
                                        {handleClick(open1)}
                                    </a >
                                    <Collapse in={open1}>
                                        <div className="collapse-inner">
                                            <ul>
                                                <li>People who are financially stable often can afford receiving regular medical check-ups when ill, which can be hard to keep up with when the frequency of bills received increases. This demographic could be positively impacted by our prototype in that having a mobile interface for the Slingshot software would make checking for extraneous costs on a large batch of bills received much easier to catch and manage accordingly.</li>
                                                <li>People who can generally afford care but may be tipped over by a particularly financially strenuous bill would also be positively affected, since having both the Slingshot software and the availability of that software on an easily accessible device like mobile would help to mitigate the adverse effects certain medical bills may have on a user.</li>
                                            </ul>
                                        </div>
                                    </Collapse>

                                </li>

                                <li><b>Under-served, uninsured populations</b>
                                    <a className="pageButton"
                                        onClick={() => { setOpen2(!open2) }}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open2}
                                    >
                                        {handleClick(open2)}
                                    </a>
                                    <Collapse in={open2}>
                                        <div className="collapse-inner">
                                            <ul>
                                                <li>People like those experiencing poverty, houselessness, disability, chronic illness(es), mental illness(es), etc. would benefit from such a service and interface, as our prototype would provide these users the option of both the technical details of their cost breakdowns and savings, as well as additional information and resources for them to access, all in one application. For those who wouldn’t have a mobile device to access our prototype from would at least be able to access the information Slingshot would provide through any device supporting the receiving of and access to emails.</li>
                                                <li>People who turn to healthcare services as a last resort or in emergency situations would also benefit from a mobile interface for Slingshot, considering ER bills can be extremely costly and oftentimes more damaging than the medical incident itself. With both the ease of access through a mobile application and the Slingshot software available through that interface, these users would be able to easily view detailed descriptions of what they were charged for like they would from an itemized bill, while simultaneously being able to account for and reduce those charges.</li>
                                            </ul>
                                        </div>
                                    </Collapse>

                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="projSect">
                        <h2>Ideation</h2>
                        <div className="subsection">
                            <h3>Sketches</h3>
                            <p>We began our iterative design process by having each member create rough sketches for 3 different screens. We didn’t specify what those screens would entail, as we wanted to get an idea of what type of screens each member thought would be the most essential for the prototype. Though some of us had screens that overlapped, we felt that our design concepts overall were substantially different enough to include them in our final sketches. You can find each of our sketches below:</p>
                            <div className="picWrapper">
                                <div className="projEmbedPic">
                                    <div>
                                        <IDCarousel />
                                        <div className="subtitle">
                                            <sub>Slide through our sketches for the mobile prototype!</sub>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <h3>Lo-Fi Wireframing</h3>
                            <p>After we finished our rough sketches, we incorporated our sketches (overlapping and separate) with additional features we felt were also relevant to Slingshot’s mission into one set of wireframes with 4 different screens: a <b>“Home”</b> page, a <b>“Bills”</b> page, a <b>“Trends”</b> page, and a <b>“Resources”</b> page:</p>

                            <div className="projEmbedPic">
                                <div>
                                    <img className="ind-img" src={require("../../assets/id-lofi.png")} />
                                    <div className="subtitle">
                                        <sub>The Lo-Fi wireframes we drew up through Figma for all of the pages agreed on.</sub>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className="subsection">
                            <h3>Style Guide</h3>
                            <div className="grid">
                                <div>
                                    <div>
                                        <p>Once we drew up our lo-fi wireframes, my group members and I designed a <b>visual design style guide</b> in Figma that consists of the <b>main page colors, font families and typography</b>, as well as <b>reusable elements</b> like buttons, headers, footers, and icons used throughout the page.</p>
                                        <p>While we were not allowed to look at the startup’s website as reference in designing our prototype, we decided to go with a soft gradient consisting of red, white, and blue. Considering the goal of the Slingshot as stated on YCombinator and our mental models of healthcare technology, we wanted a color scheme that would aesthetically tie equitable healthcare to the US-based startup and center healthcare in the national narrative, as well as fitting for the designs we often see in insurance and financial applications. </p>


                                    </div>

                                </div>
                                <div className="projEmbedPic evenPadding grid-unevenL">
                                    <div>
                                        <img className="id-intro-img" src={require("../../assets/idstyleguide.png")} />
                                        <div className="subtitle">
                                            <sub>Our cultivated style guide for the Slingshot mobile prototype interface.</sub>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>

                        <div className="subsection-end">
                            <h3>Hi-Fi Prototying</h3>
                            <p>After creating our wireframes, we implemented them into a more polished, Hi-Fi prototype through Figma. In this prototype, we also added a few features not included in our original Lo-Fi design (such as the 'Click to Upload Bill' button on the "Home" page) and included significantly more detail for realistic interactions users would be engaging with. Interact with our initial Hi-Fi prototype design below! </p>
                            <div className="grid">
                                <div className="projEmbedPic evenPadding">
                                    <div>
                                        <div id="initialPrototype">
                                            <iframe width="400" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrGRpa0UzQF0HWFcJI11lgh%2FSlingshot-Initial-HiFi-Prototype%3Fpage-id%3D16%253A2%26node-id%3D17%253A16%26viewport%3D184%252C255%252C0.16%26scaling%3Dscale-down%26starting-point-node-id%3D17%253A16" frameborder="2" allowfullscreen></iframe>
                                        </div>

                                        <div className="subtitle">
                                            <sub>Our first mobile Hi-Fi prototype for Slingshot.</sub>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <p>We presented this prototype to a critique session with other students in the CSCI1300 course. The main critiques we received regarded:</p>
                                    <ul>
                                        <li><i>Lack of User Control and Freedom</i>: Missing “back” functionality on nested pages and “escape” options from drop-down menus made it inconvenient for users to navigate through page</li>
                                        <li><i>Ineffective Aspects of our Design System</i>: The use of transparency for both cards and buttons takes away from the “Call-to-Action” nature of the buttons.</li>
                                        <li><i>Disrupting User Mental Models</i>: Returning to the “Home” page violated users’ expectations of having an animation that was not distinguishable from the animations of leaving the “Home” page (both actions caused pages to come in from the right).</li>
                                        <li><i>Overlooking Visibility</i>: The subpage tabs displayed on the “Trends” and “Resources” headers were difficult to read, as they required that users scroll horizontally to be able to view all of the offered subpages.</li>
                                    </ul>


                                </div>




                            </div>
                            <p>Once we received our critiques, we further iterated on our design by implementing fixes based on the suggestions offered by our fellow CSCI1300 students. We addressed each main critique in our final, Hi-Fi prototype:</p>
                            <ul>
                                <li><i>Improving User Control and Freedom</i>: We implemented “back” functionality on nested pages as seen in our “Bills” page, which consisted of the most nested interactions of our prototype, using “back” buttons. We also implemented “back” functionality for the drop-down menus in which they would return to their closed state when users would click on any part of the screen outside of the menus.</li>
                                <li><i>Improve Upon our Design System</i>: We assigned opaque colors to buttons like “Click to Upload Bills” on the “Home” page and drop-down menus on the “Bills” and “Trends” page, while only using transparent colors for cards.</li>
                                <li><i>Aligning with User Mental Models</i>: We added an animation for returning to the “Home” page (page comes in from the left) that was the opposite of the animations used for leaving the “Home” page to align with the idea that returning to a page is the opposite of leaving a page.</li>
                                <li><i>Accounting for Visibility</i>: We removed the scrolling feature and reduced the size of the subpage tab names on both the “Trends” and “Resources pages so users would be able to view all of the subpages offered in one place.</li>
                            </ul>
                            <p>You can find and interact with our final prototype below!</p>
                            <div className="projEmbedPic evenPadding">
                                <div>
                                    <div>
                                        <iframe width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrPZWZ6bkge78HDO7wfWb6n%2FSlingshot-HiFi-Iterated-Prototype-Iterated%3Fpage-id%3D16%253A2%26node-id%3D17%253A16%26viewport%3D566%252C146%252C0.09%26scaling%3Dscale-down%26starting-point-node-id%3D17%253A16"></iframe>
                                    </div>

                                    <div className="subtitle">
                                        <sub>Our iterated mobile Hi-Fi prototype for Slingshot.</sub>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="projSect">
                        <h2>Testing</h2>
                        <div className="subsection">
                            <h3>Task</h3>
                            <p>After finalizing our hi-fi prototype, we sent the prototype to a <a target="_blank" href="https://www.usertesting.com/">remote user testing service</a> to gather feedback and data on our design from random users.</p>
                            <div className="projEmbedPic">
                                <div><img className="ind-img" src={require("../../assets/user.gif")} />
                                    <div className="subtitle">
                                        <sub>UserTesting's homepage.</sub>
                                    </div>
                                </div>

                            </div>
                            <p>For users to test our prototype, we needed to create a specific task for them to accomplish. We decided on the following:</p>
                            <div className="centerText">
                                <p><b>"Find the cost breakdown of how much you saved in “Physician Services” on your most recently completed bill from RI Hospital."</b></p>
                            </div>

                            <div className="grid">
                                <div>
                                    <p>To complete this task, we broke down a user’s required actions into 4 subtasks:</p>
                                    <ul>
                                        <li>Navigate to the "Bills" page.</li>
                                        <li>Click on the “Sort and Filter” dropdown button to sort the “Completed” bills by “Most Recent.”</li>
                                        <li>Find the most recently completed bill from RI Hospital.</li>
                                        <li>Click on “Emergency Visit, Level 4” under “Physician Services” to see the cost breakdown of what you saved.</li>
                                    </ul>
                                </div>
                                <div className="projEmbedPic evenPadding">
                                    <div>
                                        <img className="ind-img" src={require("../../assets/demo.gif")} />
                                        <div className="subtitle">
                                            <sub>A demo of the tasks we assigned to the users through UserTesting.</sub>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <p>With our submission of the prototype to the UserTesting site, we included the following directions for the user to keep in mind:</p>
                            <div className="centerText">
                                <p><b>"Imagine you are a company employee stressed about medical bills from your emergency room visit in September. You want to check if that medical bill has reduced in cost through the Slingshot app on your phone. Your task is to find the cost breakdown of how much you saved in “Physician Services” on your most recently completed bill from RI Hospital. You are encouraged to think aloud as you perform the task so we can better understand your thought process while navigating the site!</b></p>
                                <p><b>Please note that this is an interactive mock-up and not an actual mobile application. Some screens (e.g. the Spendings tab in the Trends page) were not actually created or are unreachable through the mock-up."</b></p>
                            </div>
                            <p>We also included the following post-test questionnaire:</p>
                            <ul>
                                <li>How would you describe your overall experience with the prototype?</li>
                                <li>What, if anything, surprised you about the experience?</li>
                                <li>What, if anything, made you frustrated about the app?</li>
                                <li>What are your thoughts on the design, color, and/or layout?</li>
                            </ul>
                        </div>
                        <div className="subsection">
                            <h3>Results</h3>
                            <p>We had a total of 3 users test our Hi-Fi prototype, with their results and answers to our post-test questionnaire included below:</p>
                            <div>

                                <button className="dropButt"
                                    onClick={() => { setOpen7(!open7) }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open7}
                                >
                                    <h4>User 1 <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" />
                                    </svg>
                                    </h4>
                                </button >
                                <Collapse in={open7}>
                                    <div className="collapse-inner">
                                        <a target="_blank" href="https://app.usertesting.com/v/55924344-b259-4886-a32d-ca6c7f3a4c5a?encrypted_video_handle=e7115a6f-b1cf-4b81-9111-049c9ced1a43&shared_via=email#!/notes&shared_via=link">User 1's Testing Video</a>
                                        <p>Post-Test Questionnaire:</p>
                                        <ul>
                                            <li> How would you describe your overall experience with the prototype?
                                                <ul><li>"It was easy to use and everything was where I expected to be and was el labeled. I had no questions along the way."</li></ul>
                                            </li>
                                            <li>What, if anything, surprised you about the experience?
                                                <ul><li>"The clarity of the breakdown was very easy to understand, especially considering the content (medical bills) being overwhelming and confusing."</li></ul>
                                            </li>
                                            <li> What, if anything, made you frustrated about the app?
                                                <ul><li>"I really didn't find anything frustrating. It was all quite simple."</li></ul>
                                            </li>
                                            <li> What are your thoughts on the design, color, and/or layout?
                                                <ul><li>"Overal it feels somewhat dated, low tech, and lacking polish. The colors are nice, very calming. The layout is simple and not confusing."</li></ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>

                            <div>

                                <button className="dropButt"
                                    onClick={() => { setOpen8(!open8) }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open8}
                                >
                                    <h4>User 2 <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" />
                                    </svg>
                                    </h4>
                                </button >
                                <Collapse in={open8}>
                                    <div className="collapse-inner">
                                        <a target="_blank" href="https://app.usertesting.com/v/c87e4020-6227-4fea-ab4c-852294396ddf?encrypted_video_handle=ce8f0fe0-aa48-4f4d-9b26-c344ce1a74bd&shared_via=email#!/notes&shared_via=link">User 2's Testing Video</a>
                                        <p>Post-Test Questionnaire:</p>
                                        <ul>
                                            <li> How would you describe your overall experience with the prototype?
                                                <ul><li>"Easy to use, clear direction to get where I needed to go- clear flow."</li></ul>
                                            </li>
                                            <li>What, if anything, surprised you about the experience?
                                                <ul><li>"Intrigued by the concept."</li></ul>
                                            </li>
                                            <li> What, if anything, made you frustrated about the app?
                                                <ul><li>"Making it a little more clear what the cost changes meant."</li></ul>
                                            </li>
                                            <li> What are your thoughts on the design, color, and/or layout?
                                                <ul><li>"Colors made me think of a maternity ward in a hospital. Baby colors."</li></ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>

                            <div>

                                <button className="dropButt"
                                    onClick={() => { setOpen6(!open6) }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open6}
                                >
                                    <h4>User 3 <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" />
                                    </svg>
                                    </h4>
                                </button >
                                <Collapse in={open6}>
                                    <div className="collapse-inner">
                                        <a target="_blank" href="https://app.usertesting.com/v/847b2b60-af8d-436b-a9dc-76fbad938169?encrypted_video_handle=94eda025-74a2-4df8-9162-adf39f07882f&shared_via=email#!/notes&shared_via=link">User 3's Testing Video</a>
                                        <p>Post-Test Questionnaire:</p>
                                        <ul>
                                            <li> How would you describe your overall experience with the prototype?
                                                <ul><li>"It was very easy to understand and utilize."</li></ul>
                                            </li>
                                            <li>What, if anything, surprised you about the experience?
                                                <ul><li>"Nothing it was very clear cut."</li></ul>
                                            </li>
                                            <li> What, if anything, made you frustrated about the app?
                                                <ul><li>"My own confusion made me frustrated."</li></ul>
                                            </li>
                                            <li> What are your thoughts on the design, color, and/or layout?
                                                <ul><li>"It looks like a normal doctor app with normal colors."</li></ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>




                        </div>
                        <div className="subsection-end">
                            <h3>Analysis</h3>
                            <p>Finally, we analyzed each user testing video by breaking down the subtasks, the errors users had made, overall user performance with the prototype, and iterations we would make for our prototype based on these results:</p>
                            <div>

                                <button className="dropButt"
                                    onClick={() => { setOpen3(!open3) }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open3}
                                >
                                    <h4>User 1 <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" />
                                    </svg>
                                    </h4>
                                </button >
                                <Collapse in={open3}>
                                    <div className="collapse-inner">
                                        <ul>
                                            <li>Subtasks the user had to accomplish
                                                <ul><li>The subtasks consisted of navigating from the homepage to the “Bills” page, sorting the “Complete” bills by “Most Recent”, and clicking on the most recent bill from RI Hospital to view how much was saved under the “Physician Services” portion of the bill.</li></ul>
                                            </li>
                                            <li>Errors the user made
                                                <ul><li>The user tried to click multiple times through the Sort and Filter → Sort By → Most Recent dropdown, and that caused difficulties in the prototype. This made the user restart from the beginning of the flow at the home page in order to continue.</li></ul>
                                            </li>
                                            <li>User's general performance
                                                <ul><li>Generally they did well on the tasks. They quickly (almost immediately) found the action element and acted upon that element in a confident and intuitive way. They voiced their ease of use, and excitement in the potential of the app, as they have a background in medicine.</li></ul>
                                            </li>
                                            <li>Potential interface changes based on the user's experience
                                                <ul><li>We can change the ‘Sort and Filter’ button to two separate buttons: one for ‘Filter’ and one for ‘Sort’.</li></ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>

                            <div>
                                <button className="dropButt"
                                    onClick={() => { setOpen4(!open4) }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open4}
                                >
                                    <h4>User 2 <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" />
                                    </svg></h4>
                                </button >
                                <Collapse in={open4}>
                                    <div className="collapse-inner">
                                        <ul>
                                            <li>Subtasks the user had to accomplish
                                                <ul><li>The subtasks consisted of navigating from the homepage to the “Bills” page, sorting the “Complete” bills by “Most Recent”, and clicking on the most recent bill from RI Hospital to view how much was saved under the “Physician Services” portion of the bill.</li></ul>
                                            </li>
                                            <li>Errors the user made
                                                <ul><li>The only error that the user made was misclicking the wrong section of the dropdown, but they fixed this error quickly and they were able to navigate the rest of the dropdown options menus that popped up.</li></ul>
                                            </li>
                                            <li>User's general performance
                                                <ul><li>Generally, they did very well on the tasks and navigated everything with quick ease. From their thought process, the user had a very thorough understanding of the task, the layout, and the navigation of our prototype. Specifically, they said that navigating and finding information was “very straightforward” and what they were looking for was easy to find and in “one of the first places [they] looked.” The task that took the longest was opening the dropdown menu to Sort and Filter, but that was because they clicked on the wrong section.</li></ul>
                                            </li>
                                            <li>Potential interface changes based on the user's experience
                                                <ul><li>Based on the results and feedback, an interface change we would make is to specify the numerical values on the cards that have the original price to the decreased price. The user said that it was not clear if the second number was what the cost was reduced by or if it was what the cost was reduced to. This could be made more clear with a net info button or just more text that explains the meaning of the numbers.</li></ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>


                            <div>
                                <button className="dropButt"
                                    onClick={() => { setOpen5(!open5) }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open5}
                                >
                                    <h4>User 3 <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" />
                                    </svg></h4>
                                </button >
                                <Collapse in={open5}>
                                    <div className="collapse-inner">
                                        <ul>
                                            <li>Subtasks the user had to accomplish
                                                <li>The subtasks consisted of navigating from the homepage to the “Bills” page, sorting the “Complete” bills by “Most Recent”, and clicking on the most recent bill from RI Hospital to view how much was saved under the “Physician Services” portion of the bill.</li>
                                            </li>
                                            <li>Errors the user made
                                                <ul><li>One error that the user made was that they accidentally clicked on the “Trend” icon button on the footer instead of the “Bills” icon from the homepage in subtask 1, so they got confused by the following action directed in subtask 2, which was interacting with a feature only presented on the “Bills” page. The user ended up having to navigate back to the homepage from “Trends” through the footer and was able to successfully get to the “Bills” page the second time.</li>
                                                    <li>Once they got to the “Bills” page, they made the mistake of clicking the “Pending” “Sort and filter” dropdown button as opposed to the directed “Complete” “Sort and filter” dropdown button in subtask 2, which could have just been a matter of misreading or forgetting the task directions.</li>
                                                    <li>Lastly, the user had difficulties getting from subtask 3 to 4 and navigated between “Bills” and the homepage until they were able to successfully complete subtask 4 by completing a step that was not specified in subtask 3, which only directed the user to locate the most recent bill from RI Hospital. By clicking on that bill, the user was able to get to the nested page that eventually allowed them to complete subtask 4. This error was not necessarily on the user’s part, but ours.</li></ul>
                                            </li>
                                            <li>User's general performance
                                                <ul><li>Overall, they did very well on both understanding and completed the assigned subtasks, although subtask 1 and 4 took the longest for them to complete due to the errors discussed above. One thing that stood out to me was our lack of clarification on subtask 3, which did not specify for the user to actually click on the bill that we wanted them to interact with. That led to quite a bit of confusion for the user, which could have been avoided by specifying that we wanted the user to both locate and interact with the bill button. For all of the assigned tasks, however, the user stated that they were able to successfully complete each one, rating 2/4 tasks with a 4 and the rest with a 5.</li></ul>
                                            </li>
                                            <li>Potential interface changes based on the user's experience
                                                <ul><li>Based off of the results from this UserTesting video, some potential interface changes I would make would include finding a way to organize or space the footer icons out in a way that would help reduce the chances of a user clicking on an icon they did not intend to interact with, as well as making the header titles more noticeable and attention-grabbing so users can easily deduce where they are in the application.</li></ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>



                        </div>




                    </div>
                    <div className="projSect-end">
                        <h2>Conclusions and Next Steps</h2>
                        <div className="subsection-end">
                            <h3>Summary</h3>
                            <p>All users had a general sense of confidence and navigated with ease. Any errors they came across, they were eventually able to resolve with some exploration. </p>
                            <p>Based on all the users' feedback and their testing videos, here is what we'd improve upon in future iterations of this prototype:</p>

                            <ul>
                                <li>Information Clarity
                                    <ul><li>Specify exactly what the numerical price values on the cards mean</li></ul>
                                </li>
                                <li>Organization
                                    <ul><li>Space footer icons out such that the chances of a user clicking on an icon they did not intend to interact with would be reduced</li>
                                        <li>Make the header titles more noticeable and attention-grabbing so users can easily deduce where they are in the app</li></ul>
                                </li>
                                <li>Mental Models
                                    <ul><li>Change the ‘Sort and Filter’ button into two separate buttons: one for ‘Filter’ and one for ‘Sort’ to better align with user expectations</li></ul>
                                </li>
                                <li>User Populations
                                    <ul><li>More research will need to be done to further address the needs of those that are in situations where their smartphone use is dependent on aspects like accessibility, financial situation, housing status, or any other factor (what unique issues do they face that we have not designed for in our app?)</li></ul>
                                </li>
                            </ul>
                        </div>
                    </div>


                </Fade>

            </div>
        </section>
    )
}

export default IterativeDesign;