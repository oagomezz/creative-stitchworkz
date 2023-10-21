import React from 'react'
import './testimonials.css'
import { testimonials } from '../../logic'

const Testimonials = () => {
  return (
    <div id='test-box'>
        <div id='testimonial-container'>
            <div id='text-container'>
                <h1 id='testimonials'>See what our customer's are saying</h1>
                {testimonials.map((testimonial, index) => {
                    return(
                        <p key={index}>{testimonial.test}</p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Testimonials