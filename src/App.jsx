import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="font-inter bg-[#0b0b12] text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Mohith. All rights reserved.
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}

export default App;
