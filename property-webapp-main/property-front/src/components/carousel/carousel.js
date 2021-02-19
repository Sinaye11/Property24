import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css"

import p1img from "../../assets/images/properties/p51.jpg"
import p2img from "../../assets/images/properties/p52.jpg"
import p3img from "../../assets/images/properties/p53.jpg"

const MyCarousel = () => {

    return ( 
        <div classNameName="container my-4 " >
            <div className="carousel-container border">
                <Carousel>
                    <div>
                        <img src={p1img} alt="img1" />
                    </div>
                    <div>
                        <img src={p2img} alt="img2" />
                    </div>
                    <div>
                        <img src={p3img} alt="img3" />
                    </div>
                </Carousel>
            </div>
        </div>
     );
}
 
export default MyCarousel;