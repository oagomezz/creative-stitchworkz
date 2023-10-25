import React from 'react'
import './form.css'

const Form = () => {
    const links = [
        {
            name: 'name',
            placeholder: 'Name',
            type: 'text',
        },
        {
            name: 'email',
            placeholder: 'Email',
            type: 'text',
        },
        {
            name: 'Phone Number',
            placeholder: '(xxx) - xxx - xxxx',
            type: 'text',
        },
        {
            name: 'Subject',
            placeholder: 'How can we help you?',
            type: 'text',
        },
    ]
  return (
    <div>
        <h1 id='form'>Contact Me</h1>
        <div id='form-container'>
            <div className='stuff'>
            <form className='form'>
                {links.map((link, index) => {
                   return(
                    <>
                        <div key={index}>
                            <input  type={link.type} placeholder={link.placeholder} />
                        </div>
                        <br />
                    </>
                   )
                })}
                <textarea type='text'/>
                <button className="button" type='submit'>Submit</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Form