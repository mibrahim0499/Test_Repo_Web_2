import React from 'react'

function Testimonial() {
  return (
    <div className="container-fluid bg-light py-6 px-5">
    <div className="text-center mx-auto mb-5" style={{"max-width":"600px"}}>
      <h1 className="display-5 text-uppercase mb-4">What Our <span className="text-primary">Happy Cleints</span> Say!!!</h1>
    </div>
    <div className="row gx-0 align-items-center">
      <div className="col-xl-4 col-lg-5 d-none d-lg-block">
        <img className="img-fluid w-100 h-100" src="img/testimonial.jpg" alt="testimonialll"/>
      </div>
      <div className="col-xl-8 col-lg-7 col-md-12">
        <div className="testimonial bg-light">
          <div className="owl-carousel testimonial-carousel">
            <div className="row gx-4 align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <img className="img-fluid w-100 h-100 bg-light p-lg-3 mb-4 mb-md-0" src="img/testimonial-1.jpg" alt="testimonialone" />
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7">
                <h4 className="text-uppercase mb-0">Client Name</h4>
                <p>Profession</p>
                <p className="fs-5 mb-0"><i className="fa fa-2x fa-quote-left text-primary me-2" /> Dolores sed duo
                  clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                  lorem magna ut labore et tempor diam tempor erat. Erat dolor rebum sit
                  ipsum.</p>
              </div>
            </div>
            <div className="row gx-4 align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <img className="img-fluid w-100 h-100 bg-light p-lg-3 mb-4 mb-md-0" src="img/testimonial-2.jpg" alt="Testimonialtwo" />
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7">
                <h4 className="text-uppercase mb-0">Client Name</h4>
                <p>Profession</p>
                <p className="fs-5 mb-0"><i className="fa fa-2x fa-quote-left text-primary me-2" /> Dolores sed duo
                  clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                  lorem magna ut labore et tempor diam tempor erat. Erat dolor rebum sit
                  ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial