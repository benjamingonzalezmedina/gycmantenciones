import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Values from './components/Values';
import About from './components/About';
import Certifications from './components/Certifications';
import Policies from './components/Policies';
import Careers from './components/Careers';
import Whistleblower from './components/Whistleblower';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Values />
      <About />
      <Certifications />
      <Policies />
      <Careers />
      <Whistleblower />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default App;
