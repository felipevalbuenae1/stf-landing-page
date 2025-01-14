import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainNavbar from './components/Navbar/MainNavbar';
import TopBannerCarousel from './components/TopBannerCarousel/TopBannerCarousel';
import './App.scss';
import { Tabs } from 'react-bootstrap';
import CustomBreadcrumb from './components/Breadcrumb/Breadcrumb';
import CarouselBanner from './components/CarouselBanner/CarouselBanner';
import CarouselTest from './components/CarouselTest/CarouselTest';
import Footer from './components/Footer/Footer';

function App() {
  const images = [
    {
      src: 'BANNER-TOP-ENVIO-GRATIS-250K-202-LG.jpg',
      srcMobile: 'BANNER-TOP-ENVIO-GRATIS-250K-202-SM.jpg',
      alt: 'Image 1'
    },
    {
      src: 'banner-top-newsletter-dic-2024-lg-new-2.jpg',
      srcMobile: 'banner-top-newsletter-dic-2024-sm-new-2.jpg',
      alt: 'Image 2'
    },
  ];

  return (
    <Router>
      <div className="App">
        <TopBannerCarousel images={images} />
        <MainNavbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;