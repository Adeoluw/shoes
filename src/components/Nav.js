import React from 'react'
import { FaHeart, FaShoppingCart,FaUser} from "react-icons/fa";


const Nav = () => {
  return (
    <div>
      <header className="App-header">
        <div className="logo">
          <h1>
            Shoe<span className="logo-edit">s</span>
          </h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Reviews</li>
            <li>Services</li>
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
