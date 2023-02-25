import React from 'react';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import MidHomePage from './Components/HomePage/MidHomePage';
import ServiceCards from './Components/HomePage/ServiceCards';
import TopSeller from './Components/HomePage/TopSeller';
import UnderHood from './Components/HomePage/UnderHood';
import NavigationMenu from './Components/NavigationMenu';

const Home = () => {
  return (
   <>
     <NavigationMenu/>
     <HomePage/>
     <MidHomePage/>
     <ServiceCards/>
     <UnderHood/>
     <TopSeller/>
     {/* <ProductPage/> */}
     <Footer/>
   </>
  )
}

export default Home;
