// HOME -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from "react";
import { connect } from "react-redux";

// IMPORT FROM FILES -- CSS
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.sendToRandomVideo = this.sendToRandomVideo.bind(this);
    }

    sendToRandomVideo() {
        let randomNumber = (Math.floor(Math.random() * this.props.data.length))
        let { videoId } = this.props.data[randomNumber].snippet.resourceId
        this.props.history.push(`/videos/${videoId}`)
    }

    render() {
        console.log(this.props)
        let { loading, data } = this.props
        return (
            loading ?
                <div> ...loading </div>
                :
                <main className="home">
                    <div className="home-intro">
                        <p>Watch the hit web series video showtube show
                        <span>
                                <a href="https://www.polygon.com/monster-factory">
                                    <img className="home-title-image" src="https://cdn.vox-cdn.com/uploads/chorus_image/image/56422269/monster-factory-title.0.png" />
                                </a>
                            </span></p>
                        <p> Along the way, count how many times a MackEllroy(sp?) says "BOY." Think of it like a drinking game,
                            but instead of imbibing legal addictive depressents, you're channeling your
                             existential dread into a monotonous task of measuring the elusive quality of "humor." </p>
                        <p>
                            ENJOY!
                        </p>
                    </div>
                    <button className="home-random-button" onClick={this.sendToRandomVideo}>CLICK FOR A RANDOM VIDEO</button>
                </main>
        )
    }
}

const mapStateToProps = (state) => {
    return state.videoData
}

export default connect(mapStateToProps, {})(Home);
