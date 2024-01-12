import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { links } from '../../logic.js'

const Footer = () => {
return (
<div id='footer'>
    <div className='footer-content'>
        <div id='footer-left'>
            <h1> Find us</h1>
            <h3>
                5636 S Tacoma Way, Tacoma, WA 98409 <br />
                (253) 442-5729
            </h3>
                
        </div>
        <div id='footer-middle'>
            <h1> Work Hours</h1>
            <span style={{fontSize: '14px'}}>Monday - Friday - 9AM - 5PM </span >
            <span style={{fontSize: '14px'}}>Saturday - Sunday - Closed</span>
        </div>
        <div id='footer-right'>
            <h1> Quick Links</h1>
            <div id='right-container'>
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
    <hr/>
    <div>
        <h3 style={{display: "flex", justifyContent: 'center', padding: '20px'}}><span>Creative Stitchworkz&nbsp;</span>&copy; 2024 All rights reserved</h3>
    </div>
</div>
)}

export default Footer