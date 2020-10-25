import React, { Component } from 'react';
import Home from './layout/Home';
import About from './layout/About';
import Projects from './layout/Projects';
import Contact from './layout/Contact';
import { Link, Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <a className="navbar-brand">sidneytjson</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse show" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link activeClass="active" className="nav-link" to="home" smooth={true} duration={1000} offset={-50} >Home</Link></li>
              <li className="nav-item"><Link activeClass="active" className="nav-link" to="about" smooth={true} duration={1000} offset={-50} >About</Link></li>
              <li className="nav-item"><Link activeClass="active" className="nav-link" to="proj" smooth={true} duration={1000} offset={-50} >Projects</Link></li>
              <li className="nav-item"><Link activeClass="active" className="nav-link" to="contact" smooth={true} duration={1000} offset={-50} >Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Element name="home" className="element" >
          <Home />
        </Element>
        <Element name="about" className="element" >
          <About />
        </Element>
        <Element name="proj" className="element" >
          <Projects />
        </Element>
        <Element name="contact" className="element" >
          <Contact />
        </Element>
      </div>
    );
  }
}

export default App;
