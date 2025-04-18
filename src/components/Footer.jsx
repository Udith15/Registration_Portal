import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='f1'>
        <h2>Contact Us</h2>
        <ul>
            <li>Phone: +1 234 567 890</li>
            <li>Email: time@gmail.com </li>
        </ul>
      </div>
      <div className='f2'>
        <h2>Follow Us</h2>
        <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
