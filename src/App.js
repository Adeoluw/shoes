import './App.css';
import { FaHeart, FaShoppingCart, FaUser, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaAngleRight} from "react-icons/fa";
import shoe from "./image/shoes.png"
import background from "./image/bg1.png"


function App() {
  return (
    <div className="App">
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
      <main>
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
            <button>Shop Now <FaAngleRight className='angle-icon' /> </button>
          </div>
          <div className="hero-img">
            <img src={shoe} alt="" />
          </div>
          <img src={background} alt="" className="background" />
        </section>
      </main>
    </div>
  );
}

export default App;
