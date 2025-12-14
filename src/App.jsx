import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import WorkSection from './Components/Work Section/WorkSection';
import ServiceSection from './Components/Service Section/ServiceSection';
import AltSection from './Components/AltSection/AltSection';
import Alt2Section from './Components/Alt2Section/Alt2Section';
import Portfolio from './Components/Portfolio/Portfolio';
import PricingSection from './Components/Pricing Section/PricingSection';
import FaqSection from './Components/Faq Section/FaqSection';
import TeamSection from './Components/Team Section/TeamSection';
import TestimonialsSection from './Components/Testimonials Section/TestimonialsSection';
import ContactSection from './Components/Contact Section/ContactSection';
import Footer from './Components/Footer/Footer';


function App() {
  

  return (
   <div className='index-page'>
   <Navbar />
   <div className='main'>
    <Home />
    <About/>
    <WorkSection />
    <ServiceSection/>
    <AltSection/>
    <Alt2Section/>
    <Portfolio/>
    <PricingSection/>
    <FaqSection/>
    <TeamSection/>
    <TestimonialsSection/>
    <ContactSection/>
   </div>
   <Footer/>
   </div>
  )
}

export default App
