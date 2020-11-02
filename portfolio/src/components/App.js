import React, { Component } from 'react';
import Home from './layout/Home';
import Nav from './layout/Nav';
import About from './layout/About';
import Projects from './layout/Projects';
import Contact from './layout/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  //refs
  Home = React.createRef();
  About = React.createRef();
  Projects = React.createRef();
  Contact = React.createRef();

  changeSelection = index => {
    this.setState({
      selected: index
    });
  };

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
          <Home />
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
      </div>
    );
  }
}

export default App;
