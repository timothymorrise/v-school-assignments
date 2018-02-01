// VIDEO PAGE -- COMPONENT
// ------------------------------
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class VideoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentVideo: {},
            loading: true
        }
    }

    checkValidId() {
        let { id } = this.props.match.params
        return this.props.data.some(video => {
            return (video.snippet.resourceId.videoId === id)
        })
    }

    render() {
        let { loading } = this.props
        let isValidId = this.checkValidId()
        return (
            loading ?
                <div>loading</div>
                :
                isValidId ?
                    <main>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.match.params.id}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </main>
                :
                <Redirect to={"https://www.youtube.com/watch?v=kWxyZNw7-Ns"} />
        )
    }
}

const mapStateToProps = (state) => {
    return state.videoData
}
export default connect(mapStateToProps, {})(VideoPage);