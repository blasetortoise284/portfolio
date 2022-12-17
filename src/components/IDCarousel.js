import { Carousel } from 'react-bootstrap';
import React from 'react';

function IDCarousel() {
    return (
        <Carousel className="idCarousel" interval={null}>
            <Carousel.Item className="carouselCardBg">
                <div className="carouselCard">
                    <img className="d-block w-100" src={require("../assets/sketch_1.png")} />
                </div>
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 1</h3>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item className="carouselCardBg">
                <div className="carouselCard">

                    <img
                        className="d-block w-100"
                        src={require("../assets/sketch_2.png")}
                    />
                </div>
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 2</h3>
                </Carousel.Caption>


            </Carousel.Item>

            <Carousel.Item className="carouselCardBg">
                <div className="carouselCard">
                    <img
                        className="d-block w-100"
                        src={require("../assets/sketch_3.png")}
                    />
                </div>
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 3</h3>
                </Carousel.Caption>


            </Carousel.Item>

            <Carousel.Item className="carouselCardBg">
                <div className="carouselCard">
                    <img
                        className="d-block w-100"
                        src={require("../assets/sketch_4.png")}
                    />
                </div>
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 4</h3>
                </Carousel.Caption>


            </Carousel.Item>

        </Carousel>
    );

}
export default IDCarousel;