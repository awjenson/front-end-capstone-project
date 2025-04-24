// Order of components in the HomePage:
// Hero
// Highlights
// Testimonials
// About
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export default function HomePage() {
    return (
        // <></> is a React fragment.
        // It allows you to group multiple children elements without adding extra nodes to the DOM.
        <>

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

        </>
    );
  }
