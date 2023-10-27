import React, { useState, useRef} from 'react'
import './form.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]: value })
    }
     const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            "service_9ay5tqn",
            "template_ohl0nbd",
            {   from_name: form.name,
                to_name: 'CreativeStitchworkz',
                from_email: form.email,
                to_email: 'oagomez437@icloud.com',
                phone: form.phone,
                message: form.message,
            },
            "k9QPg871A18r2ryyb"
        )
        .then(() => {
            setLoading(false)
            alert('Thank you, We will get back to you as soon as possible')


            setForm({
                name:'',
                email: '',
                phone: '',
                message: '',
            })
        }, (error) => {
            setLoading(false)
            console.log(error)
            alert('Sorry, something went wrong...')
        })
    }

    const links = [
        {
            name: 'name',
            placeholder: 'Name',
            type: 'text',
            value: form.name
        },
        {
            name: 'email',
            placeholder: 'Email',
            type: 'text',
            value: form.email
        },
        {
            name: 'phone',
            placeholder: '(xxx) - xxx - xxxx',
            type: 'text',
            value: form.phone
        },
        {
            name: 'message',
            placeholder: 'How can we help you?',
            type: 'text',
            value: form.message
        },
    ]
  return (
    <div>
        <h1 id='form'>Contact Me</h1>
        <div id='form-container'>
            <div className='stuff'>
            <form ref={formRef} onSubmit={handleSubmit} className='form' method='post' action='send-email.php'>
                {links.map((link, index) => {
                   return(
                    <>
                        <div key={index}>
                            <input  
                                onChange={handleChange} 
                                type={link.type} 
                                placeholder={link.placeholder} 
                                name={link.name}
                                value={link.value}
                            />
                        </div>
                    </>
                   )
                })}
                <button className="button" type='submit'>
                    {loading ? 'Sending...': 'Send'}
                </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact