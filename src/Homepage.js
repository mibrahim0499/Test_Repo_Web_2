import React from 'react'
import Topbar from './components/Topbar';
import Navigationbar from './components/Navigationbar';
import TheCarousel from './components/TheCarousel';
import AboutStart from './components/AboutStart';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactWebpg from './ContactWebpg';

function Homepage() {
  return (<>
  
  <Topbar />
  <Navigationbar />
  <TheCarousel />
  <AboutStart />
  <Services />
  <Appointment />
  <Portfolio />
  <Team />
  <Testimonial />
  <Blog />
  <Footer />
  
  
  </>)
}

export default Homepage