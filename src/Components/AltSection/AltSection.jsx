import React from 'react'
import './AltSection.css'

export default function AltSection() {
  return (
    <div>
      <section id="services-alt" className="services-alt section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="content-block">
              <h6 className="subtitle">Our innovative services</h6>
              <h2 className="title">Our customers excel in technology management</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt diam et gravida consequat. Sed nec mauris quis lacus commodo lobortis. Suspendisse euismod commodo sem, in finibus purus bibendum et. Morbi eu neque sed velit convallis vestibulum a vel odio.
              </p>
              <div className="button-wrapper">
                <a className="btn" href="services.html"><span>Explore All Services</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-list">
              <div className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                <div className="service-icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Software Engineering</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>

              <div className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                <div className="service-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Business Analytics</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>

              <div className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                <div className="service-icon">
                  <i className="bi bi-phone"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Mobile Solutions</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>

              <div className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                <div className="service-icon">
                  <i className="bi bi-gear"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Tech Infrastructure</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    </div>
  )
}
