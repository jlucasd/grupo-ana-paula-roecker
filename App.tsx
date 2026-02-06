import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;