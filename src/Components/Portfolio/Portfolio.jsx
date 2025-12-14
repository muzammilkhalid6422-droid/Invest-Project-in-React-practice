import React from 'react'
import './Portfolio.css'
import portfolio1 from '../assets/portfolio/portfolio-1.webp'
import portfolio2 from '../assets/portfolio/portfolio-10.webp'
import portfolio3 from '../assets/portfolio/portfolio-7.webp'
import portfolio4 from '../assets/portfolio/portfolio-4.webp'
import portfolio5 from '../assets/portfolio/portfolio-2.webp'
import portfolio6 from '../assets/portfolio/portfolio-11.webp'

export default function Portfolio() {
  return (
    <div>
      <section id="portfolio" className="portfolio section">

      
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
            <ul className="portfolio-filters isotope-filters">
              <li data-filter="*" className="filter-active">All Work</li>
              <li data-filter=".filter-web">Web Design</li>
              <li data-filter=".filter-graphics">Graphics</li>
              <li data-filter=".filter-motion">Motion</li>
              <li data-filter=".filter-brand">Branding</li>
            </ul>
          </div>

          <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={portfolio1}className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={portfolio1} className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Web Design</span>
                  <h3>Modern Dashboard Interface</h3>
                  <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={portfolio2} className="img-fluid" alt="" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={portfolio2}className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Graphics</span>
                  <h3>Creative Brand Identity</h3>
                  <p>Vestibulum id ligula porta felis euismod semper at vulputate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-motion">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={portfolio3}className="img-fluid" alt="" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={portfolio3}className="glightbox preview-link" data-gallery="portfolio-gallery-motion"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Motion</span>
                  <h3>Product Animation Reel</h3>
                  <p>Donec ullamcorper nulla non metus auctor fringilla dapibus.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-brand">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={portfolio4}className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={portfolio4}className="glightbox preview-link" data-gallery="portfolio-gallery-brand"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Branding</span>
                  <h3>Luxury Brand Package</h3>
                  <p>Aenean lacinia bibendum nulla sed consectetur elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={portfolio5}className="img-fluid" alt="" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={portfolio5} className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Web Design</span>
                  <h3>E-commerce Platform</h3>
                  <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={portfolio6}className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={portfolio6} className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Graphics</span>
                  <h3>Digital Art Collection</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum.</p>
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
