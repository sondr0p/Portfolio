import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class Contact extends Component {
    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
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
                                <input className="form-control" type="email" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control contact-message" placeholder="Your message" />
                            </div>
                            <button className="btn btn-primary" type="submit" value="Send">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
