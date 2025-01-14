import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselBanner.css';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const CarouselBanner = () => {
  const isMobile = useMediaQuery({ maxWidth: 598 });

  return (
    <div className="carousel-banner">
      {
        isMobile ? (
          <Carousel controls={false} indicators={false}>
        <Carousel.Item>
            <Row>
                <Col>
                    <div className="carousel-banner-item"> 
                        <img className='w-100 img-fluid' src={process.env.PUBLIC_URL + '/landing/' + 'STF-ERROR404-BANNER-SM-DICIEMBRE-2024-2.jpg'} alt="Item 1" />
                    </div>
                </Col>
            </Row>
    
        </Carousel.Item>
    
      </Carousel>
        ) : (
          <Carousel controls={false} indicators={false}>
        <Carousel.Item>
            <Row>
                <Col>
                    <div className="carousel-banner-item"> 
                        <img className='w-100 img-fluid' src={process.env.PUBLIC_URL + '/landing/' + 'STF-ERROR404-BANNER-LG-DICIEMBRE-2024-2.jpg'} alt="Item 1" />
                    </div>
                </Col>
            </Row>
    
        </Carousel.Item>
    
      </Carousel>
        )
      }
      
    </div>
  );
};

export default CarouselBanner;