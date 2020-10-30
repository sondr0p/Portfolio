import React, { Component } from 'react';
import Home from './layout/Home';
import About from './layout/About';
import Projects from './layout/Projects';
import Contact from './layout/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
