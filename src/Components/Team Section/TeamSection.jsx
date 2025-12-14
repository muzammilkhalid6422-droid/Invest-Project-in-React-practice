import React from 'react'
import person from '../assets/person/person-m-1.webp'
import person2 from '../assets/person/person-f-6.webp'
import person3 from '../assets/person/person-m-6.webp'
import person4 from '../assets/person/person-f-3.webp'
import './TeamSection.css'

export default function TeamSection() {
  return (
    <div>
       <section id="team" className="team section light-background">

      
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-5">

          <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div className="team-card">
              <div className="team-image">
                <img src={person}className="img-fluid" alt=""/>
                <div className="team-overlay">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Daniel Mitchell</h4>
                <span className="position">Creative Director</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
            <div className="team-card">
              <div className="team-image">
                <img src={person2} className="img-fluid" alt=""/>
                <div className="team-overlay">
                  <p>Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque. Nunc dignissim risus id metus.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Rebecca Taylor</h4>
                <span className="position">Lead Developer</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
            <div className="team-card">
              <div className="team-image">
                <img src={person3} className="img-fluid" alt=""/>
                <div className="team-overlay">
                  <p>Cras ornare tristique elit. Integer in dui quis est placerat ornare. Phasellus a lacus a risus.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Marcus Johnson</h4>
                <span className="position">UI/UX Designer</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
            <div className="team-card">
              <div className="team-image">
                <img src={person4}className="img-fluid" alt=""/>
                <div className="team-overlay">
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Jessica Parker</h4>
                <span className="position">Marketing Strategist</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    </div>
  )
}
