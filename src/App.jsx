import './App.css';
import Nav from './Pages/Nav';
import ScrollToTopBtn from './Pages/ScrollToTopBtn';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import SettingsBtn from './Pages/SettingsBtn';

function App() {
  
  return (
    <div className="main-container">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />

      <ScrollToTopBtn />
      <SettingsBtn />
    </div>
  );
}

export default App;
