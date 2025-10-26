import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LandingSections from './components/LandingSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <LandingSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;