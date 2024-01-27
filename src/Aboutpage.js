import React from 'react'
import Topbar from './components/Topbar'
import Navigationbar from './components/Navigationbar'
import AboutStart from './components/AboutStart'
import Appointment from './components/Appointment'
import Team from './components/Team'
import Footer from './components/Footer'

function Aboutpage() {
  return <>

    <Topbar />
    <Navigationbar />

    {/* About page header*/}
    <div className="container-fluid page-header">
    <h1 className="display-3 text-uppercase text-white mb-3">About</h1>
    <div className="d-inline-flex text-white">
      <h6 className="text-uppercase m-0"><a href>Home</a></h6>
      <h6 className="text-white m-0 px-3">/</h6>
      <h6 className="text-uppercase text-white m-0">About</h6>
    </div>
  </div>

    <AboutStart />
    <Appointment />
    <Team />
    <Footer />

    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>





    </>
  
}

export default Aboutpage