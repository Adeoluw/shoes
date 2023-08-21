import React from 'react'
import { FaUndoAlt, FaHeadset,FaTruckMoving } from 'react-icons/fa';


const Services = () => {
  return (
    <div className="services-section" id="services">
      <h1>
        OUR <span className="service-span">SERVICES</span>
      </h1>
      <div className="services">
        <div className="service">
          <div className="service-icon-con">
            <FaTruckMoving className="service-icon" />
          </div>
          <div className="service-text">
            <h2>Fast Delivery</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon-con">
            <FaUndoAlt className="service-icon" />
          </div>
          <div className="service-text">
            <h2>10 Days Replacement</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon-con">
            <FaHeadset className="service-icon" />
          </div>
          <div className="service-text">
            <h2>24 x 7 Support</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
