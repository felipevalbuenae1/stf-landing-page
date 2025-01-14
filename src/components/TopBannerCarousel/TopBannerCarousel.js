import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './TopBannerCarousel.css';
import { useMediaQuery } from 'react-responsive';

const TopBannerCarousel = ({ images }) => {
  const isMobile = useMediaQuery({ maxWidth: 598 });

  const responsiveDesktop = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    }
  };

  const responsiveMobile = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      {isMobile ? (
        <Carousel
          responsive={responsiveMobile}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          arrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className='top-banner-carousel'
        >
          {images.map((image, index) => (
            <div key={index}>
              <img className='' src={process.env.PUBLIC_URL + '/landing/' + image?.srcMobile} alt={`Banner mobile ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel
          responsive={responsiveDesktop}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          arrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className='top-banner-carousel'
        >
          {images.map((image, index) => (
            <div key={index}>
              <img className='' src={process.env.PUBLIC_URL + '/landing/' + image?.src} alt={`Banner desktop ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default TopBannerCarousel;