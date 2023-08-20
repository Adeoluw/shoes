import React from 'react'
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaAngleRight,
} from "react-icons/fa";
import shoe from "../image/shoes.png";
import background from "../image/bg1.png";


const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text-section">
          <h1>
            NIKE <br /> COLLECTION
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            reprehenderit ipsum adipisci. Praesentium qui consequuntur eveniet
            nisi est quis porro voluptates expedita, necessitatibus tempora
            excepturi? Amet odit reiciendis unde consectetur!
          </p>
          <div className="socials">
            <FaFacebook className="social-icons " />
            <FaTwitter className="social-icons " />
            <FaInstagram className="social-icons" />
            <FaLinkedin className="social-icons" />
          </div>
          <div className="shop-button">
            <div className="button-animate">Shop Now</div>
            <FaAngleRight className="angle-icon" />
          </div>
        </div>
        <div className="hero-img">
          <img src={shoe} alt="" />
        </div>
        <img src={background} alt="" className="background" />
      </section>
    </>
  );
}

export default Hero
