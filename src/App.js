import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import ContactWebpg from './ContactWebpg';
import Servicespage from './Servicespage';
import OurProjectsPage from './OurProjectsPage';
import Theteampage from './Theteampage';
import Testimonialpage from './Testimonialpage';
import TestTestimonial from './components/TestTestimonial';

function App() {
  return <>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />}> </Route>
    <Route path="/About" element={<Aboutpage />}> </Route>
    <Route path="/Service" element={<Servicespage />}> </Route>
    <Route path="/Projects" element={<OurProjectsPage />}> </Route>
    <Route path="/Team" element={<Theteampage />}> </Route>
    <Route path="/Testimonial" element={<Testimonialpage />}> </Route>
    <Route path="/Contact" element={<ContactWebpg />}> </Route>
  
  </Routes> 
  </BrowserRouter> 
   

  
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

    


  </>
}

export default App;
