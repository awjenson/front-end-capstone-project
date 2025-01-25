import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item-nav">
        <Nav />
      </div>
      <div className="grid-item-hero">
        <Hero />
      </div>
      <div className="grid-item-highlights">
        <Highlights />
      </div>
      <div className="grid-item-testimonials">
        <Testimonials />
      </div>
      <div className="grid-item-about">
        <About />
      </div>
      <div className="grid-item-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
