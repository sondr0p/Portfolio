import React, { Component } from 'react';
import selfie from '../../../public/selfie.jpg';
import resume from '../../../public/resume.pdf';

export default class About extends Component {
    render() {
        return (
            <div class="mySection ">
                <div class="container">
                    <h1 class="display-3">ABOUT</h1>
                    <div class="row">
                        <div class="col-sm-4"><img class="img-fluid" src={selfie} alt="" /></div>
                        <div class="col-sm-8">
                            <p>
                                Hello! My name is Sidney Tj Son.
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
        )
    }
}
