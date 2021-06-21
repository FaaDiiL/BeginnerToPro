import React,{ useState } from 'react'

function Contact() {
     const [contactInfo, setContactInfo] = useState({})
     function handleSubmit(e) {
          e.preventDefault()
          if(e.target[0].value !== '' && e.target[1].value !== '' && e.target[2].value !== ''){
               setContactInfo({
                    Name: e.target[0].value,
                    Email: e.target[1].value,
                    Message: e.target[2].value
               })
          }
     }

     return (
          <form onSubmit={handleSubmit}>
                <input type='text' name="name" placeholder="Name" />              
                <input type='email' name="email" placeholder="Email" />              
                <input type='text' name="message" placeholder="Message" />
                <input type='submit' value='Send' />
          </form>
     )
}

export default Contact
