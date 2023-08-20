import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Products />
      </main>
    </div>
  );
}

export default App;
