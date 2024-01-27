import React from 'react'
import Topbar from './components/Topbar'
import Navigationbar from './components/Navigationbar'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function OurProjectsPage() {
  return <>
  
  <Topbar />
  <Navigationbar />

    {/*project page header*/}
  <div className="container-fluid page-header">
  <h1 className="display-3 text-uppercase text-white mb-3">Project</h1>
  <div className="d-inline-flex text-white">
    <h6 className="text-uppercase m-0"><a href>Home</a></h6>
    <h6 className="text-white m-0 px-3">/</h6>
    <h6 className="text-uppercase text-white m-0">Project</h6>
  </div>
</div>

    <Portfolio />
    <Footer />

<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  
  </>
  
}

export default OurProjectsPage