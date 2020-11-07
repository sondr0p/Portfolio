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
                this.state.result = "Email Sent!";
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div className="nav-section contact">
                <div className="container">
                    <h1 className="sub-heading text-center">Contact</h1>
                    <h5 className="text-center">Have a question or want to work together?</h5>
                    <div className="container">
                        <form className="contact-form" onSubmit={this.sendEmail}>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Name" name="from_name" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Enter email" name="from_email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control contact-message" placeholder="Your message" name="message" />
                            </div>
                            <button className="btn btn-primary" type="submit" value="Send">Submit</button>
                        </form>
                    </div>
                    <p>{this.state.result}</p>
                </div>
            </div>
        )
    }
}
