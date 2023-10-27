import React from 'react'
import './testimonials.css'
import { testimonials } from '../../logic'

const Testimonials = () => {
  return (
    <div id='test-box'>
        <div id='testimonial-container'>
            <div id='text-container'>
                <h2 id='testimonial-header'>Reviews</h2>
                <div className='testimonials'>
                {testimonials.map((testimonial, index) => {
                    return(
                        <div className='ind-test-container'>
                            <p className='testimonial' key={index}>{testimonial.test}</p>
                            <h2 className='customer'> - {testimonial.customer}</h2>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials