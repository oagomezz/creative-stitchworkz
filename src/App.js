import './App.css';
import Header from './components/header/header';
import MobileNavigation from './components/mobile/mobile-nav.js';
import Contact from './components/contactForm/form.js'
import Testimonials from './components/testimonials/testimonials';
import { links } from './logic';
import Footer from './components/footer/footer';

import React from 'react'

export const App = () => {
  return (
    <>
      <div className='head'>
        <Header />
        <MobileNavigation />
      </div>
      <div id='hero-box'>
        <div className='hero'>
          <div id="p-container">
            <h2 id='intro-title'>Enduring Tradition</h2>
            <p>At <span> Creative Stitchworkz</span>, we don't just reupholster cars; we revive memories, preserve legacies, and create beautiful interiors. <br/><br/>Join us on this journey where military precision meets artistic passion, and where your vision becomes our mission.</p>
            <p>Experience the <span> Creative Stitchworkz</span> difference today where quality, integrity, and tradition converge to deliver excellence in every stitch. <br/><br/> Thank you for considering us as your trusted upholstery partner in Tacoma, Washington.</p>
            <p id='sm-intro'>Welcome to <span id='tradition'>Tradition</span>.<br/>Welcome to Excellence.<br/> Welcome to <span> Creative Stitchworkz</span>. </p>
            <div>
              <div className='social'>
              {links.map((link, index) => (
                    <div key={index}>
                        <a onClick={() => window.open(link.url, '_blank)')}>
                            {link.image}
                        </a>
                    </div>                     
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className='contact-box'>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}


export default App;
