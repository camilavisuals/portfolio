import './App.css';
import './i18n';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import useSectionObserver from './components/SectionObserver';
import { Projects } from './components/Projects';
import { CarouselLogo } from './components/Carousel';
import { AboutMe } from './components/AboutMe';

function App() {

  useSectionObserver(['banner', 'aboutMe' , 'projects' , 'contact', 'footer']);

  return (
    <div className="App">
      <NavBar />
      <Banner id="banner" />
      <AboutMe id="aboutMe" />
      <Projects id="projects" />
      <CarouselLogo />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
}

export default App;