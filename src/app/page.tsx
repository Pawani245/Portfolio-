import React from 'react';

import Hero from '../app/components/hero';
import About from './components/About';
import Education from './components/Education';
import Extracurriculars from './components/Volunteering';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero  />
      <About />
      <Education />
      <Projects />
      <Research />
      <Extracurriculars />
      <Footer />
    </main>
  );
}