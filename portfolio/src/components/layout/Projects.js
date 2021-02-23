import React, { Component } from 'react';
import blog from '../../../public/blog.png';
import chess from '../../../public/chess.png';
import cia from '../../../public/cia.png';
import game from '../../../public/game.png';
import socal from '../../../public/socal.png';

export default class Projects extends Component {
    state = {
        showText: false,
        showHeader: false,
        showImage: true
    }

    render() {
        return (
            <div className="nav-section projects">
                <div className="container">
                    <h1 className="sub-heading text-center" data-aos="fade-right">Projects</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-custom text-center shadow" data-aos="flip-right">
                                <div className="card-front">
                                    <img src={blog} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back align-self-center">
                                    <h5 className="card-title">React Blog</h5>
                                    <p className="card-tech">React/Django-Rest-Framework</p>
                                    <button type="button" className="btn btn-outline-primary button-custom card-button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://github.com/sondr0p/Personal-Blog';
                                        }}>
                                        Github
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card card-custom text-center shadow" data-aos="flip-right">
                                <div className="card-front">
                                    <img src={socal} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back align-self-center">
                                    <h5 className="card-title">Twitter Heatmap</h5>
                                    <p className="card-tech">Python</p>
                                    <button type="button" className="btn btn-outline-primary button-custom card-button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://github.com/sondr0p/TweetDjango';
                                        }}>
                                        Github
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-custom text-center shadow" data-aos="flip-right">
                                <div className="card-front">
                                    <img src={cia} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back align-self-center">
                                    <h5 className="card-title">Web Crawler</h5>
                                    <p className="card-tech">Angular/Java</p>
                                    <button type="button" className="btn btn-outline-primary button-custom card-button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://github.com/sondr0p/WebSearch';
                                        }}>
                                        Github
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card card-custom text-center shadow" data-aos="flip-right">
                                <div className="card-front">
                                    <img src={game} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back align-self-center">
                                    <h5 className="card-title">Sunken Arena</h5>
                                    <p className="card-tech">C#/Unity</p>
                                    <button type="button" className="btn btn-outline-primary button-custom card-button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://www.youtube.com/watch?v=f8As9Dfj9-U&feature=youtu.be&fbclid=IwAR0zkqtzIETlFqYWJZRDAfT9FdXNvNzv6FiaBCqkvCPZpBs1UvaarV-9p5o';
                                        }}>
                                        Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-custom text-center shadow" data-aos="flip-right">
                                <div className="card-front">
                                    <img src={chess} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back align-self-center">
                                    <h5 className="card-title">VR Chess</h5>
                                    <p className="card-tech">C#/Unity</p>
                                    <button type="button" className="btn btn-outline-primary button-custom card-button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://github.com/sondr0p/ChessVR';
                                        }}>
                                        Github
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
