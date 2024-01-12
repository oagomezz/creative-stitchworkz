import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'

export const pages = [
        {
          name:'Creative Stitchworkz',
          ref: '#home'
        },
        {
          name:'About',
          ref: '#about'
        },
        {
          name:'Testimonials',
          ref: '#testimonials'
        },
        {
          name:'Contact Me',
          ref: '#form'
        }, 
      ]

export const testimonials = [
    {
    test: "While Creative Stitch Stitchworkz is still fairly new. Eros has done a fantastic job making my dream come true creating the canvas top for my custom VW. Any upholstery I may need, this is the place I will always go to!! I will always recommend Creative Stitchworkz to anyone!",
    customer: 'Peter Hangslou',
    pictures: ['https://lh5.googleusercontent.com/p/AF1QipPcNzL62L9x6SJUrFj2OnY_brlWR248VpU63Ycd=w600-h321-p-k-no', "https://lh5.googleusercontent.com/p/AF1QipPSCNIYoIQZIZ1bAQQrbVGq2k4Ba3V5YKbtayI2=w600-h650-p-k-no", "https://lh5.googleusercontent.com/p/AF1QipN0wbnh0ZLvgv3X-Nw8S0AjFUV6uG9O29CebgpV=w600-h650-p-k-no", "https://lh5.googleusercontent.com/p/AF1QipMpMwdue6fIrmEfVKJUh53kzAQLUKk30ZKxoO5J=w600-h650-p-k-no"]
},
{
    test: "Great experience, highly recommend. He knocked it out of the park on my seat. Thanks",
    customer: 'Jesus Ruiz',
    pictures: [],
},
{
    test: "We were very pleased with the service, communication, quality of the product used and the results are wonderful",
    customer: 'Stacy Evans',
    pictures: [],
},
{
    test: "Outstanding on seats, headliners and more!!",
    customer: 'KJ Ulmer',
    pictures: [],
}
]

export const links = [
  {
    url: "https://www.facebook.com/creativestitchworkz?mibextid=LQQJ4d",
    image: <AiOutlineFacebook />
  },
  {
    url: "https://instagram.com/creativestitchworkz?igshid=MzRlODBiNWFlZA==",
    image: <AiOutlineInstagram/>
  }
]