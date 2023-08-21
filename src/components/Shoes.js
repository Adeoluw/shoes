import React from 'react'
import shoes from '../shoesdata'
import { FaHeart, FaShare } from 'react-icons/fa'


const Shoes = () => {
    const shoeCard = shoes.map(item => {
        return (
          <div className="shoe-card" key={item.id}>
            <div className="shoe-img">
              <img src={item.img} alt="" />
            </div>
            <div className="product-text">
              <h2>NIKE</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="price">{item.price}</p>
            </div>
            <div className="rating-button">
              <div className="rating">{item.rating}</div>
              <button>Add To Cart</button>
            </div>
            <div className="card-icons">
              <FaHeart className="card-animated-icon" />
              <FaShare className="card-animated-icon" />
            </div>
          </div>
        );
    })
  return (
    <div className='shoes'>
      {shoeCard}
    </div>
  )
}

export default Shoes
