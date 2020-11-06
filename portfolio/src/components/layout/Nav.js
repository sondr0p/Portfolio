import React, { Component } from 'react';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }
    // When the user scrolls the page, execute myFunction
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        // When the user scrolls the page, execute myFunction
        window.onscroll = function () { myFunction() };

        // Get the header
        var header = document.getElementById("home");
        var nav = document.getElementById("nav-bar");

        // Get the offset position of the navbar
        //var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset > header.clientHeight) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }
    }
    render() {
        const { changeSelection } = this.props;
        const show = (this.state.menu) ? "show" : "";
        return (
            <div id="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse " + show}>
                        <div className="navbar-nav navbar-custom">
                            <button type="button" className="nav-button-custom" onClick={() => changeSelection(0)}><h5>Home</h5></button>
                            <button type="button" className="nav-button-custom" onClick={() => changeSelection(1)}><h5>About</h5></button>
                            <button type="button" className="nav-button-custom" onClick={() => changeSelection(2)}><h5>Projects</h5></button>
                            <button type="button" className="nav-button-custom" onClick={() => changeSelection(3)}><h5>Contact</h5></button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}