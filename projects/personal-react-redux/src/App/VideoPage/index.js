// VIDEO PAGE -- COMPONENT
// ------------------------------

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { changeBoyCounter } from "../../redux/video-data";

// IMPORT FROM FILES
import "./VideoPage.css"

// CONSTRUCTOR
class VideoPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.lateralNavigate = this.lateralNavigate.bind(this);
        this.retrieveIndex = this.retrieveIndex.bind(this);
    }

    checkValidId() {
        let { id } = this.props.match.params
        return this.props.data.some(video => {
            return (video.snippet.resourceId.videoId === id)
        })
    }

    retrieveIndex(id) {
        let { data } = this.props
        let refVideo = data.filter(video => {
            let { videoId } = video.snippet.resourceId
            if (videoId === id) return video
        })[0]
        return data.indexOf(refVideo);
    }

    lateralNavigate(increment, id) {
        let { data } = this.props
        let index = this.retrieveIndex(id)
        let newId = data[index + increment].snippet.resourceId.videoId
        this.props.history.push(`/videos/${newId}`)
    }

    handleClick(e) {
        let { name } = e.target
        let { id } = this.props.match.params
        switch (name) {
            case "add":
                this.props.changeBoyCounter(id, 1)
                break;
            case "minus":
                this.props.changeBoyCounter(id, -1)
                break;
            case "forward":
                this.lateralNavigate(1, id);
                break;
            case "backward":
                this.lateralNavigate(-1, id);
        }
    }

    lateralNavigate(increment, id) {
        let { data } = this.props
        let refVideo = data.filter(video => {
            let { videoId } = video.snippet.resourceId
            if (videoId === id) return video
        })[0]
        let index = data.indexOf(refVideo);
        let newId = data[index + increment].snippet.resourceId.videoId
        this.props.history.push(`/videos/${newId}`)
    }


    render() {
        // DECONSTRUCTIONS
        let { loading } = this.props
        let { id } = this.props.match.params
        let { handleClick, retrieveIndex } = this
        let { data } = this.props

        // VALID ID FUNCTION CALL
        let isValidId = this.checkValidId()

        // GENERATE BUTTONS
        const lateralButtons = () => {
            switch (retrieveIndex(id)) {
                case 0:
                    return <div className="video-page-sliders" id="video-page-forward-only">
                        <button onClick={handleClick} name="forward">&rarr;</button>
                    </div>
                    break;
                case data.length - 1:
                    return <div className="video-page-sliders">
                        <button onClick={handleClick} name="backward">&larr;</button>
                    </div>;
                default:
                    return <div className="video-page-sliders">
                        <button onClick={handleClick} name="backward">&larr;</button>
                        <button onClick={handleClick} name="forward">&rarr;</button>
                    </div>
            }
        }

        // GENERATE BOY COUNTER
        const generateBoyCounter = () => {
            return data.filter(video => {
                let { videoId } = video.snippet.resourceId
                return (videoId === id)
            })[0].boyCounter
        }


        // JSX RETURN    
        return (
            loading ?
                <div>loading</div>
                :
                isValidId ?
                    <main>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${id}`}
                            frameBorder="0"
                            allow="encrypted-media"
                            allowFullScreen>
                        </iframe>
                        <h1>Boy Counter</h1>
                        <div className="video-page-counter">
                            <button onClick={handleClick} name="add">+</button>
                            <h1>{generateBoyCounter()}</h1>
                            <button onClick={handleClick} name="minus">-</button>
                        </div>
                        {lateralButtons()}
                    </main>
                    :
                    <main className="four-oh-four"> THE ONLY WAY OUT IS DOWN, DEBRA. 
                        <a href="http://homestarrunner.com/404error.html">&darr;</a> 
                    </main>
        )
    }
}

// EXPORT
const mapStateToProps = (state) => {
    return state.videoData
}

export default connect(mapStateToProps, { changeBoyCounter })(VideoPage);