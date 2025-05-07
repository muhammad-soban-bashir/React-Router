import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact page</h1>
      <div className='contact-buttons'>
     <button onClick={()=>navigate('info')}>Info</button>
     <button onClick={()=>navigate('form')}>Forms</button>

      </div>
    </div>
  )
}

export default Contact