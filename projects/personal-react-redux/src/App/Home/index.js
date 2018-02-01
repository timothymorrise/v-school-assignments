// HOME -- COMPONENT
// ==============================

import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
    this.sendToRandomVideo = this.sendToRandomVideo.bind(this);
    }

    sendToRandomVideo() {
        let randomNumber = (Math.floor(Math.random() * this.props.data.length))
        let id = this.props.data[randomNumber].snippet.resourceId.videoId 
        this.props.history.push(`/videos/${id}`)
    }
 
    render() {
        console.log(this.props)
        let { loading, data } = this.props
        return (
            loading ?
            <div> ...loading </div>
            :
            <main>
                home test
                <button onClick={this.sendToRandomVideo}>CLICK FOR A RANDOM VIDEO</button>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return state.videoData
}

export default connect(mapStateToProps, {} )(Home);
