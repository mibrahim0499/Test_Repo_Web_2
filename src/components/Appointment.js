import React from 'react'

function Appointment() {
  return (
    <div className="container-fluid py-6 px-5">
    <div className="row gx-5">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="mb-4">
          <h1 className="display-5 text-uppercase mb-4">Request A <span className="text-primary">Call Back</span></h1>
        </div>
        <p className="mb-5">Nonumy ipsum amet tempor takimata vero ea elitr. Diam diam ut et eos duo duo sed. Lorem elitr sadipscing eos et ut et stet justo, sit dolore et voluptua labore. Ipsum erat et ea ipsum magna sadipscing lorem. Sit lorem sea sanctus eos. Sanctus sit tempor dolores ipsum stet justo sit erat ea, sed diam sanctus takimata sit. Et at voluptua amet erat justo amet ea ipsum eos, eirmod accusam sea sed ipsum kasd ut.</p>
        <a className="btn btn-primary py-3 px-5" href>Get A Quote</a>
      </div>
      <div className="col-lg-8">
        <div className="bg-light text-center p-5">
          <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control border-0" placeholder="Your Name" style={{"height":"55px"}} />
              </div>
              <div className="col-12 col-sm-6">
                <input type="email" className="form-control border-0" placeholder="Your Email" style={{"height":"55px"}} />
              </div>
              <div className="col-12 col-sm-6">
                <div className="date" id="date" data-target-input="nearest">
                  <input type="text" className="form-control border-0 datetimepicker-input" placeholder="Call Back Date" data-target="#date" data-toggle="datetimepicker" style={{"height":"55px"}} />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="time" id="time" data-target-input="nearest">
                  <input type="text" className="form-control border-0 datetimepicker-input" placeholder="Call Back Time" data-target="#time" data-toggle="datetimepicker" style={{"height":"55px"}} />
                </div>
              </div>
              <div className="col-12">
                <textarea className="form-control border-0" rows={5} placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Submit Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
 
  )
}

export default Appointment