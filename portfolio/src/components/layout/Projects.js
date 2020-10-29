import React, { Component } from 'react';
import chess from '../../../public/chess.png';
import cia from '../../../public/cia.png';
import game from '../../../public/game.png';
import socal from '../../../public/socal.png';

export default class Projects extends Component {
    render() {
        return (
            <div class="mySection ">
                <div class="container">
                    <h1 class="display-3">Projects</h1>
                    <div class="row" style={{ marginTop: 20 }}>
                        <div class="col-sm-4"><img class="img-fluid" src={socal} alt="" /></div>
                        <div class="col-sm-8"><p>Twitter Heatmap</p></div>
                    </div>
                    <div class="row" style={{ marginTop: 20 }}>
                        <div class="col-sm-4"><img class="img-fluid" src={cia} alt="" /></div>
                        <div class="col-sm-8"><p>Web Crawler</p></div>
                    </div>
                    <div class="row" style={{ marginTop: 20 }}>
                        <div class="col-sm-4"><img class="img-fluid" src={game} alt="" /></div>
                        <div class="col-sm-8"><p>Sunken Arena</p></div>
                    </div>
                    <div class="row" style={{ marginTop: 20 }}>
                        <div class="col-sm-4"><img class="img-fluid" src={chess} alt="" /></div>
                        <div class="col-sm-8"><p>VR Chess</p></div>
                    </div>
                </div>
            </div>

        )
    }
}
