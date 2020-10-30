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
            <div className="nav-section">
                <div className="container">
                    <h1 className="sub-heading text-center">Projects</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-custom">
                                <div className="card-front">
                                    <img src={blog} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back">
                                    <h5 className="text-center">React Blog</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card card-custom">
                                <div className="card-front">
                                    <img src={socal} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back">
                                    <h5 className="text-center">Twitter Heatmap</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-custom">
                                <div className="card-front">
                                    <img src={cia} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back">
                                    <h5 className="text-center">Web Crawler</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card card-custom">
                                <div className="card-front">
                                    <img src={game} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back">
                                    <h5 className="text-center">Sunken Arena</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-custom">
                                <div className="card-front">
                                    <img src={chess} className="card-img-top card-image-custom" alt="..."></img>
                                </div>
                                <div className="card-back">
                                    <h5 className="text-center">VR Chess</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
