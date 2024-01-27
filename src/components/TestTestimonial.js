import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function TestTestimonial() {
    const options = {
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    };
    

    return (
        <div className="container-fluid bg-light py-6 px-5">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                <h1 className="display-5 text-uppercase mb-4">What Our <span className="text-primary">Happy Clients</span> Say!!!</h1>
            </div>
            <div className="row gx-0 align-items-center">
                <div className="col-lg-5 d-none d-lg-block">
                    <img className="img-fluid w-100 h-100" src="img/testimonial.jpg" alt="Main Testimonial" />
                </div>
                <div className="col-lg-7 col-md-12">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item">
                            <div className="testimonial bg-light p-4">
                                <img className="img-fluid mb-4" src="img/testimonial-1.jpg" alt="Testimonial 1" />
                                <h4 className="text-uppercase mb-0">Client Name</h4>
                                <p>Profession</p>
                                <p className="fs-5 mb-0">"Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum."</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial bg-light p-4">
                                <img className="img-fluid mb-4" src="img/testimonial-2.jpg" alt="Testimonial 2" />
                                <h4 className="text-uppercase mb-0">Client Name</h4>
                                <p>Profession</p>
                                <p className="fs-5 mb-0">"At lorem lorem magna ut labore et tempor diam tempor erat. Erat dolor rebum sit ipsum."</p>
                            </div>
                        </div>
                        {/* Add more items as needed */}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
}

export default TestTestimonial;

