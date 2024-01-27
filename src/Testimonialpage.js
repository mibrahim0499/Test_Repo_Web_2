import React from 'react'
import Topbar from './components/Topbar'
import Navigationbar from './components/Navigationbar'
// import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import TestTestimonial from './components/TestTestimonial'

function Testimonialpage() {
  return <>
  
  <Topbar />
  <Navigationbar />
  <TestTestimonial />
  <Footer />

  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

  
  </>
}

export default Testimonialpage