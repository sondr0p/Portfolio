import React, { Component } from 'react';
import Home from './layout/Home';
import Nav from './layout/Nav';
import About from './layout/About';
import Projects from './layout/Projects';
import Contact from './layout/Contact';
import Footer from './layout/Footer';
import 'particles.js/particles';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  //refs for nav bar
  Home = React.createRef();
  About = React.createRef();
  Projects = React.createRef();
  Contact = React.createRef();

  changeSelection = index => {
    this.setState({
      selected: index
    });
  };

  componentDidMount() {
    // particle animation background
    window.particlesJS.load('home', '/assets/particles.json', null);

    // scrolling animations
    AOS.init({
      offset: 100,
      duration: 1000,
      disable: 'mobile'
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollToSection(this.state.selected);
  }

  scrollToSection = index => {
    let refs = [
      this.Home,
      this.About,
      this.Projects,
      this.Contact
    ];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        nearest: "block"
      });
    }
  };

  render() {
    return (
      <div>
        <div ref={this.Home}>
          <Home changeSelection={this.changeSelection} />
        </div>
        <Nav changeSelection={this.changeSelection} />
        <div ref={this.About}>
          <About />
        </div>
        <div ref={this.Projects}>
          <Projects />
        </div>
        <div ref={this.Contact}>
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
