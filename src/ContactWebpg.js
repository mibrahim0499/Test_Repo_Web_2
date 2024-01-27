import React from 'react'
import Topbar from './components/Topbar';
import Navigationbar from './components/Navigationbar';
import ContactHeader from './components/ContactHeader';
import ContactpgData from './components/ContactpgData';
import Footer from './components/Footer';

function ContactWebpg() {
  return (
    <div>
    <Topbar />
    <Navigationbar />
    <ContactHeader />
    <ContactpgData />
    <Footer />


<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
  )
}

export default ContactWebpg