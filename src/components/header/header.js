import React from 'react'
import '../header/header.css'
import logo from '../../assets/logo.png'
import { pages } from '../../logic'

const header = () => {
  return (
    <div id='header-components'>
        <div>
          <img id='header-image' src={logo} alt='logo' />
        </div>
        <ul className='navbar'>
            {pages.map((page, index) => {
              return(
                <a key={index} href={page.ref}>
                  <li>{page.name}</li>
                </a>
              )
            })
          }
        </ul>
    </div>
  )
}

export default header