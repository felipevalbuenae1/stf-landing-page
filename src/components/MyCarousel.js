import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MyCarousel = () => {
  return (
    <div className="">
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container-with-scrollbar"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div><img src="https://via.placeholder.com/300" alt="Item 1" /></div>
        <div><img src="https://via.placeholder.com/300" alt="Item 2" /></div>
        <div><img src="https://via.placeholder.com/300" alt="Item 3" /></div>
        <div><img src="https://via.placeholder.com/300" alt="Item 4" /></div>
        <div><img src="https://via.placeholder.com/300" alt="Item 5" /></div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;