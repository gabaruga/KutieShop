import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './Reel.css'

class Reel extends Component {
    render () {
        return (
            <Carousel className="carousel">
                <Carousel.Item>
                    <img width={600} height={80} alt="600x80" src="img/b1.jpg" />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={80} alt="600x80" src="img/b2.jpg" />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={80} alt="600x80" src="img/b3.jpg" />
                   
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Reel;