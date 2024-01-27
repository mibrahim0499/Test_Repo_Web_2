import React from 'react'
import Topbar from './components/Topbar'
import Navigationbar from './components/Navigationbar'
import Services from './components/Services'
import Appointment from './components/Appointment'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function Servicespage() {
  return <>

    <Topbar />
    <Navigationbar />
    <Services />
    <Appointment />
    <Testimonial />
    <Footer />
    
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>


</>     
}

export default Servicespage