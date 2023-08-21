import React from 'react'
import { FaHeart, FaShoppingCart,FaUser} from "react-icons/fa";


const Nav = () => {
  return (
    <div>
      <header className="App-header">
        <div className="logo" id='top'>
          <h1>
            Shoe<span className="logo-edit">s</span>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </nav>
        <div className="account-details">
          <FaHeart className="icons Heart" />
          <FaShoppingCart className="icons cart" />
          <FaUser className="icons user" />
        </div>
      </header>
    </div>
  );
}

export default Nav
