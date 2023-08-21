import React from 'react'
import reviewsData from '../Testimonialsdata';

const Testimonials = () => {

    const testimonial = reviewsData.map(item => {
        return (
          <div className="testmonial">
            <div className="reviewer">
              <div className="reviewer-img">
                <img src={item.image} alt="" />
              </div>
              <div className="reviewer-name-rating">
                <div className='reviewer-name'>
                  <h3>{item.name}</h3>
                </div>
                <div className="reviewer-rating">
                    {item.rating}
                </div>
              </div>
            </div>
            <div className='testimonial-text'>
                    <p>{item.text}</p>
            </div>
          </div>
        );
    })

  return (
    <div className="testimonials-section" id="reviews">
      <h1>
        CUSTOMER'S <span className="review-span">REVIEW</span>
      </h1>
      <div className="testimonials-con">{testimonial}</div>
    </div>
  );
}

export default Testimonials
