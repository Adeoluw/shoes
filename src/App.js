import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Login from './components/Login';
import Footer from './components/Footer';
import { FaArrowUp } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Products />
        <About />
        <Testimonials />
        <Services />
        <Login />
        <Footer />
        <a href="#top" className="to-top">
          <FaArrowUp className="arrow-up" />
        </a>
      </main>
    </div>
  );
}

export default App;
