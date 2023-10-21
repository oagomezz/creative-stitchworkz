import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { links } from '../../logic.js'

const Footer = () => {
return (
<div id='footer'>
    <div className='footer-content'>
        <div id='footer-left'>
            <h5>
                5636 S Tacoma Way, Tacoma, WA 98409  
            </h5>
            <h5>
                (253) 442-5729
            </h5>
        </div>
        <div id='footer-middle'>
            <img id='footer-image' src={logo} alt='logo' />
        </div>
        <div id='footer-right'>
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
</div>
)}

export default Footer