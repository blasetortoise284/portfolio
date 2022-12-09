import React from 'react';
import {Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const Personas = () => {
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
        <section id="Personas" data-scroll-section>
            <div className="section">
                <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>
                    <div className="projSect">
                        <h1>Brown University MyPrint Printer Release Stations</h1>
                        <div className="headingSub">
                            <subtitle>PERSONAS INDIVIDUAL PROJECT</subtitle>
                        </div>

                        <div className="projEmbedPic">
                        <div>
                            <img className="ind-img" 
                            src={process.env.PUBLIC_URL + '../images/stationFull.jpg'} />
                            <div className="subtitle">
                                <subtitle>A Figma mock-up of the general Print Release Station set-up on campus. The computer with the software is connected to a nearby printer, enabling direct printing in a local manner.</subtitle>
                            </div>

                        </div>
                        </div>
                        
                    </div>
                    <div className="projSect">
                        <h2>Printing materials on campus</h2>
                        <p>Although most content is virtual in our technology-based society, college students often still rely on printing out materials for turning in physical copies of their essay for an English course to printing out flyers for their club's fundraiser event to plaster on doors. Brown University's MyPrint printing system enables this and extends all over campus, in which print release stations are available in many accessible locations like the library and classroom buildings. </p>
                        <p>As I've spent my hours in the Sci-Li basement next to the printers, I thought back to my first time figuring out how to print materials here. While the specifics of that memory are hazy, I can still recall back to the confusion I felt holding my card in front of minimal computer screen of the release station, not knowing what to click or where to upload anything. </p>
                        <p>After reminiscing on some of my first experiences living at Brown, I wanted to identify how users interact with the print release station by learning about their shared experiences, behaviors, and pain-points. With this information, I devised 2 relevant personas and storyboarded their interaction with the interface.</p>

                        <div className="projEmbedPic">
                        <div>
                            <img className="ind-img" src={process.env.PUBLIC_URL + '../images/computer.jpg'} />
                            <div className="subtitle">
                                <subtitle>A Figma mock-up of the Print Release Station software interface and features, which attempts to streamline the process of printing on campus for students.</subtitle>
                            </div>

                        </div>
                        </div>

                        <div className="projEmbedPic">
                        <div>
                            <img className="ind-img" src={process.env.PUBLIC_URL + '../images/printer.jpg'} />
                            <div className="subtitle">
                                <subtitle>A Figma mock-up of the printer that is connected to the computer of the Print Release Station. </subtitle>
                            </div>

                        </div>
                        </div>
                        
                        
                    </div>
                    <div className="projSect">
                        <h2>Observed interactions with the release station</h2>
                        <p>After observing 3+ users interacting with the printers in the Sci-Li basement, I learned about:</p>
                        <ul>
                            <li>Execution efficiency
                                <ul>
                                    <li>Many users had very smooth processes in terms of completing their print jobs</li>
                                    <li>Other users struggled with technical difficulties like queuing materials to print</li>
                                    <li>On average, users spent more time trying to upload files than figuring out how to print their materials</li>
                                </ul>
                            </li>
                            <li>Cues on use
                                <ul>
                                    <li>Most users generally looked towards the card reader and computer interface message as a cue for the first step</li>
                                    <li>Others looked around at the posters dispersed around the area or called over friends/staff to dictate their first step in interacting with the station </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="projSect">
                        <h2>Insight on the interfaces from students</h2>
                        <div className="subsection">
                            <h3>Questions</h3>
                            <ul>
                                <li>Tell me about your experience using the current printing system on campus.</li>
                                <li>What were your impressions of the on-boarding (first-time) experience using the printers here?</li>
                                <li>What features do you use most with the printing system (single-sided, double-sided, etc.)?</li>
                                <li>How would you rate the user-friendliness of the printer interface from 1-10? Please elaborate on the reasoning behind the rating you chose. </li>
                                <li>If you could, what would you change about the printing system here? </li>
                            </ul>
                        </div>
                        <div className="subsection-end">
                            <h3>Summarized Responses</h3>
                            <p> After speaking with 3+ users about their experience with the interface, I found that: </p>
                            <ul>
                                <li>Users observed were mostly a mix of casual and new users</li>
                                <li>Most stated that the most difficult and uncomfortable aspect of using the printer system was the uploading portion, which provided a relatively steep learning curve</li>
                                <li>Many stuck to the default settings enabled by the release station because options to edit are limited and somewhat obscure </li>
                                <li>Most users ranked the user-friendliness of the printer interface at an 8, given that it was overall very streamlined but confusing in having multiple upload methods and a delay in available queued print jobs </li>
                            </ul>
                        </div>


                    </div>
                    <div className="projSect">
                        <h2>Who are the different students interacting with the release stations? </h2>
                        <p>Based on the observations and interviews responses I collected, I came up with two personas: "Soonyoung" and "Amanda."</p>
                        <div className="subsection">
                            <h3>Soonyoung</h3>
                            <p>Soonyoung is a freshman concentrating in Biology and has to print manuals for his first ever college STEM lab section of the year. He woke up late, rushed over to the Sci-Li basement, and is struggling to figure out the printer.</p>
                            <ul>
                                <li>The interface problems that Soonyoung faces is that the Brown Printer Release Station software itself does not provide clear instructions on how to upload files, despite there being physical instructions posted onto the printer and walls around the area. He’s flustered and rushing, so he isn’t thinking about looking around him and expects the software to guide him through the process. </li>
                                <li>Soonyoung represents the users of this interface as many reported having difficulties first figuring out how to use the printing system, not thinking that they would need to look at posted instructions or the printing website to learn how to upload files.</li>
                                <li>Soonyoung demonstrates how some students, especially first-time users, wanted a consolidated way of learning how to and being able to upload and print materials easily on one interface.​​​​​​​</li>
                            </ul>
                        </div>
                        <div className="subsection-end">
                            <h3>Amanda</h3>
                            <p>Amanda is a junior concentrating in English and is the publicity chair for a dance club on campus. She has an essay and posters that she has to print out before the library closes. </p>
                            <ul>
                                <li>The interface issues that Amanda faces is that although she is a comfortable user of the Brown Printer Release Station software, she is a frequent enough user in that she recognizes aspects of the interface that would make her tasks much easier and more convenient to complete.</li>
                                <li>Amanda represents the users of the printing software who have gotten over the learning curve of first using the printer, but now recognize features of the software that impede their efficiency or comfort. </li>
                                <li>Amanda shows that while many users tolerate the current printing system, they also believe it could be improved upon that would make the overall process much smoother and pleasant.</li>
                            </ul>
                        </div>
                        <div className="projEmbedPic">
                        <div>
                            <img className="ind-img" src={process.env.PUBLIC_URL + '../images/personas.jpg'} />
                        </div>
                        </div>
                        
                    </div>
                    <div className="projSect">
                        <h2>What does Soonyoung's experience with the station look like?</h2>
                        <p>For my storyboard, I chose to go through Soonyoung's journey and his first time printing on campus. I highlighted multiple points from the time he walked into the library to when he rushed off to class with his printed materials:</p>
                        <div className="projEmbedPic">
                        <div>
                            <img className="ind-img" src={process.env.PUBLIC_URL + '../images/storyboard.jpg'} />
                            <div className="subtitle">
                                <subtitle>A storyboard of Soonyoung's journey with using the Print Release Station for the first time.</subtitle>
                            </div>

                        </div>
                        </div>
                        
                    </div>
                    <div>
                    <h2>Conclusion</h2>
                    <div className="subsection">
                        <h3>What surprised me the most</h3>
                        <p>I was most surprised by just how many people mentioned a steep learning curve they encountered when first figuring out how to upload their files for printing. </p>
                        <p>Some users talked about their dissatisfaction with other non-interface feature of the printing system on campus, an aspect that I did not anticipate but should have looked out for when proposing possible questions to ask in my interviews.</p>
                    </div>
                    <div className="subsection-end">
                        <h3>Reflection</h3>
                        <p>In terms of expanding on this project, I would like to: </p>
                        <ul>
                            <li>Observe users at different locations of the Print Release Station such as Page Robinson and the dorms (Andrews Hall), seeing if any of the locations vary in the type of instructions or directions they may provide that help or impede the learning process.</li>
                            <li>Explore the physical implementation of how including instructions directly onto the Print Release Station interface could improve first-time users' experience with using the printers on campus. </li>
                        </ul>
                    </div>
                    </div>
                    
                </Fade>

            </div>
        </section>
    )
}

export default Personas;