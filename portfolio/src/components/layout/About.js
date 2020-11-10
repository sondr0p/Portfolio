import React, { Component } from 'react';
import selfie from '../../../public/selfie.jpg';
import resume from '../../../public/resume.pdf';
import twitter from '../../../public/twitter.png';
import linkedin from '../../../public/linkedin.png';
import github from '../../../public/github.png';
import email from '../../../public/email.png';
import csharp from '../../../public/csharp.png';
import python from '../../../public/python.png';
import javascript from '../../../public/javascript.png';
import sql from '../../../public/sql.png';
import dotnet from '../../../public/dotnet.png';
import django from '../../../public/django.png';
import react from '../../../public/react.png';
import java from '../../../public/java.png';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="nav-section">
                    <div className="container">
                        <h1 className="sub-heading text-center" data-aos="fade-right">About</h1>
                        <div className="row">
                            <div className="col-sm-4" data-aos="fade-right">
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
                                <p className="about-desc" data-aos="fade-left" data-aos-delay="100">
                                    {">"} I am a full stack software engineer based in Los Angeles, CA.
                                </p>
                                <p className="about-desc" data-aos="fade-left" data-aos-delay="150">
                                    {">"} Currently I work for <a href="https://pinnacletreatment.com/">Pinnacle Treatment Centers</a>, on their electronic health record system (EHR).
                                </p>
                                <p className="about-desc" data-aos="fade-left" data-aos-delay="200">
                                    {">"} Outside of coding, some my interests include working out, following the NBA/NFL, or going out to try new places to eat.
                                </p>
                                <p className="about-desc" data-aos="fade-left" data-aos-delay="250">
                                    {">"} If you would like to contact me, feel free to send me an email or give me a call with the number given on my <a href={resume}>resume</a>.
                                </p>

                                <h5 className="text-center" data-aos="fade-left" data-aos-delay="400">Frameworks/Technologies I've used</h5>
                                <ul className="about-tech nav justify-content-center">
                                    <li data-aos="flip-up" data-aos-delay="500">
                                        <img className="about-tech-icons" src={dotnet} alt="" />
                                    </li>
                                    <li data-aos="flip-up" data-aos-delay="600">
                                        <img className="about-tech-icons" src={react} alt="" />
                                    </li>
                                    <li data-aos="flip-up" data-aos-delay="700">
                                        <img className="about-tech-icons" src={django} alt="" />
                                    </li>
                                </ul>
                                <h5 className="text-center" data-aos="fade-left" data-aos-delay="400">Languages I've used</h5>
                                <ul className="about-tech nav justify-content-center">
                                    <li data-aos="flip-up" data-aos-delay="500">
                                        <img className="about-tech-icons" src={csharp} alt="" />
                                    </li>
                                    <li data-aos="flip-up" data-aos-delay="550">
                                        <img className="about-tech-icons" src={python} alt="" />
                                    </li>
                                    <li data-aos="flip-up" data-aos-delay="600">
                                        <img className="about-tech-icons" src={javascript} alt="" />
                                    </li>
                                    <li data-aos="flip-up" data-aos-delay="650">
                                        <img className="about-tech-icons" src={sql} alt="" />
                                    </li>
                                    <li data-aos="flip-up" data-aos-delay="700">
                                        <img className="about-tech-icons" src={java} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
