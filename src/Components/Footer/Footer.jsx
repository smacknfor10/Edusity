import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright {new Date().getFullYear()} Edusity. All right reserved</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    )
}

export default Footer