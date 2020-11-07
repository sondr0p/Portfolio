import React, { Component } from 'react';
import selfie from '../../../public/selfie.jpg';
import resume from '../../../public/resume.pdf';
import twitter from '../../../public/twitter.png';
import linkedin from '../../../public/linkedin.png';
import github from '../../../public/github.png';
import email from '../../../public/email.png';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="nav-section">
                    <div className="container">
                        <h1 className="sub-heading text-center">About</h1>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="about-selfie" src={selfie} alt="" />
                                <ul className="about-social nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://twitter.com/sdnytj"><img className="about-icons" src={twitter} alt="" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.linkedin.com/in/sidneytjson"><img className="about-icons" src={linkedin} alt="" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://github.com/sondr0p"><img className="about-icons" src={github} alt="" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="mailto:sidneytjson@gmail.com"><img className="about-icons" src={email} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-8">
                                <p className="about-desc">
                                    I am a full stack software engineer based in Granada Hills, CA.
                                    Recently, I have been using .NET or Django with React for web based work but fall back to Python for simpler
                                    projects.
                                    Outside of coding, some my interests include working out, following the NBA, or going out to try new
                                    places/food!
                                If you would like to contact me, feel free to send me an email or give me a call with the number given on my <a href={resume}>resume</a>.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
