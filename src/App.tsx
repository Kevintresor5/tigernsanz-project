/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Training from './components/Training';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll callback for anchor anchors
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Matches navbar height exactly
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy to highlight active menu section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'services', 'training', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset padding for earlier highlights

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-stone-800 selection:text-stone-100 antialiased bg-[#0a0a0a]">
      {/* Dynamic Nav layer */}
      <Navbar activeSection={activeSection} onNavigate={navigateToSection} />

      {/* Main Single Screen Scroll Container */}
      <main className="flex-grow">
        {/* HERO SECTION */}
        <Hero
          onExploreCourses={() => navigateToSection('training')}
          onGetStarted={() => navigateToSection('contact')}
        />

        {/* ECOSYSTEM/CLIENTS */}
        <Clients />

        {/* ABOUT BIOGRAPHY */}
        <About />

        {/* SERVICES CATEGORIES */}
        <Services />

        {/* TRAINING ACADEMY */}
        <Training />

        {/* PORTFOLIO GRID */}
        <Projects />

        {/* TESTIMONIAL CAROUSAL */}
        <Testimonials />

        {/* CONTACT INQUIRY SECTION */}
        <Contact />
      </main>

      {/* FOOTER LAYER */}
      <Footer onScrollToTop={() => navigateToSection('hero')} />
    </div>
  );
}

