import React from 'react'
import './FaqSection.css'

export default function FaqSection() {
  return (
    <div>
       <section id="faq" className="faq section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-5">
          <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
            <div className="faq-contact-card">
              <div className="card-icon">
                <i className="bi bi-question-circle"></i>
              </div>
              <div className="card-content">
                <h3>Still Have Questions?</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum.</p>
                <div className="contact-options">
                  <a href="#" className="contact-option">
                    <i className="bi bi-envelope"></i>
                    <span>Email Support</span>
                  </a>
                  <a href="#" className="contact-option">
                    <i className="bi bi-chat-dots"></i>
                    <span>Live Chat</span>
                  </a>
                  <a href="#" className="contact-option">
                    <i className="bi bi-telephone"></i>
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="faq-accordion">
              <div className="faq-item faq-active">
                <div className="faq-header">
                  <h3>Vivamus suscipit tortor eget felis porttitor volutpat?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.
                  </p>
                </div>
              </div>

              <div className="faq-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="faq-header">
                  <h3>Curabitur aliquet quam id dui posuere blandit?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3>Sed porttitor lectus nibh ullamcorper sit amet?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3>Nulla quis lorem ut libero malesuada feugiat?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
                  </p>
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
