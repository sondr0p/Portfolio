import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class Contact extends Component {
    state = {
        result: ''
    }

    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICEID, process.env.REACT_APP_EMAIL_JS_TEMPLATEID, e.target, process.env.REACT_APP_EMAIL_JS_USERID)
            .then((result) => {
                this.setState({ result: "Email sent." });
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div className="nav-section contact">
                <div className="container">
                    <h1 className="sub-heading text-center" data-aos="fade-right">Contact</h1>
                    <div className="container">
                        <form className="contact-form" onSubmit={this.sendEmail}>
                            <h5 className="text-center" data-aos="zoom-in">Have a question or want to work together?</h5>
                            <div className="form-group" data-aos="zoom-in">
                                <input className="form-control" type="text" placeholder="Name" name="from_name" />
                            </div>
                            <div className="form-group" data-aos="zoom-in">
                                <input className="form-control" type="email" placeholder="Enter email" name="from_email" />
                            </div>
                            <div className="form-group" data-aos="zoom-in">
                                <textarea className="form-control contact-message" placeholder="Your message" name="message" />
                            </div>
                            <button className="btn btn-primary" type="submit" value="Send" data-aos="zoom-in">Submit</button>
                        </form>
                        <p>{this.state.result}</p>
                    </div>

                </div>
            </div>
        )
    }
}
