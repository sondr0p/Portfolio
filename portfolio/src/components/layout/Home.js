import React, { Component } from 'react';

export default class Home extends Component {
    state = {
        fullTextTop: "Hello, I'm Sidney Tj Son.",
        fullTextBot: "I'm a software engineer.",
        textTop: '',
        textBot: '',
        typingSpeed: 150,
        cursorTop: 'home-cursor',
        cursorBot: '',
        showButton: false
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const top = this.state.textTop.length;
        const bot = this.state.textBot.length;
        const typingSpeed = 40;

        if (top !== this.state.fullTextTop.length) {
            this.setState({ textTop: this.state.fullTextTop.substring(0, top + 1) });
        }
        else if (bot !== this.state.fullTextBot.length) {
            this.setState({
                textBot: this.state.fullTextBot.substring(0, bot + 1),
                cursorTop: '',
                cursorBot: 'home-cursor'
            });
        }
        else if (bot === this.state.fullTextBot.length) {
            this.setState({
                showButton: true
            });
        }

        setTimeout(this.handleType, typingSpeed);
    };

    render() {
        const { changeSelection } = this.props;

        return (
            <div className="home-heading" id="home">
                <div className="container">
                    <div className="home-content">
                        <div className="row">
                            <div className="mx-auto text-center h2 home-text">
                                <span className={this.state.cursorTop}>{this.state.textTop}</span> <br />
                                <span className={this.state.cursorBot}>{this.state.textBot}</span>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.showButton && <button type="button" className="mx-auto btn btn-outline-primary button-custom" onClick={() => changeSelection(1)}>Learn More</button>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
