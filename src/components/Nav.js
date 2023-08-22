import React from 'react'
import { FaHeart, FaShoppingCart,FaUser , FaBars} from "react-icons/fa";


const Nav = () => {

  const [navState, setNavState] = React.useState(false)

  function toggleNav() {
    setNavState(prevState => !prevState)
  }

  const styles = {
    opacity:  "1",
    transform: "translateY(40px)", 
    zIndex: "1"
  }
  return (
    <div>
      <header className="App-header">
        <div className="logo" id="top">
          <h1>
            Shoe<span className="logo-edit">s</span>
          </h1>
        </div>
        {!navState ? (
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
        ) : (
          <nav style={styles}>
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
        )}
        <div className="account-details">
          <FaHeart className="icons Heart" />
          <FaShoppingCart className="icons cart" />
          <FaUser className="icons user" />
        </div>
        <button className="open-nav" onClick={toggleNav}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Nav
