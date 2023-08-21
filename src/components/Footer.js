import React from 'react'
import { FaPhone, FaHome, FaEnvelope, FaFacebook, FaTwitter,FaInstagram, FaLinkedin, } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact">
          <h1>Contact</h1>
          <ul>
            <li>
              <FaPhone /> 123/Colombo/Sri Lanka
            </li>
            <li>
              <FaHome /> +94 12 345 6789
            </li>
            <li>
              <FaEnvelope /> 123/Colombo/Sri Lanka
            </li>
          </ul>
        </div>
        <div className="help">
          <h1>Get Help</h1>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Payment Options</li>
          </ul>
        </div>
        <div className="stores">
          <h1>Our Stores</h1>
          <ul>
            <li>Sir Lanka</li>
            <li>USA</li>
            <li>India</li>
            <li>Japan</li>
          </ul>
        </div>
        <div>
          <h1>Follow Us</h1>
          <div className="footer-socials">
            <FaFacebook className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaLinkedin className="footer-icon" />
          </div>
        </div>
        <div className="lead-magnet">
          <h1>Newsletter</h1>
          <div className="email-form">
            <input type="email" placeholder="Enter your emailY" />
            <button>Subsribe</button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
