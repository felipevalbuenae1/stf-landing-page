import React from 'react';
import MyCarousel from '../components/MyCarousel';
import CustomBreadcrumb from '../components/Breadcrumb/Breadcrumb';
import CarouselBanner from '../components/CarouselBanner/CarouselBanner';
import CarouselTest from '../components/CarouselTest/CarouselTest';
import CategorySection from '../components/CategorySection/CategorySection';
import CustomTabs from '../components/CustomTabs/CustomTabs';

const Home = () => {
  return (
    <div style={{paddingTop: '30px'}}>
      {/* <h1>Welcome to STF Landing Page</h1> */}
      {/* <MyCarousel /> */}
      <CustomBreadcrumb />
        <CarouselBanner />
        <CategorySection />
        <CarouselTest />
        <CustomTabs />
    </div>
  );
};

export default Home;