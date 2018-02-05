// List -- Component
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// IMPORT FILES
import "./List.css"

// CONSTRUCTOR
 class List extends Component {
    render() {
        let { loading, data } = this.props
        if(!loading) console.log(this.props)
        
        // MAP LIST IEMS
        let mapPreviewDivs = () => {
            return data.map(dataObject => {
                // DECONSTRUCTIONS
                let { snippet } = dataObject
                let { title } = snippet
                let { url } = snippet.thumbnails.medium
                let { videoId } = snippet.resourceId
                // RETURN
                return <div key={videoId} className="list-item">
                    <Link to={`/videos/${videoId}`}>
                    <div className="list-item-image" style={{ backgroundImage: `url(${url})` }}></div>
                    <h2>
                    {title}
                    </h2>
                    </Link>
                </div>

            })
        }

        return (
            loading ?
            <div> ...loading </div>
            :
            <main>
                <div>
                {mapPreviewDivs()}
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return state.videoData
}

export default connect(mapStateToProps, {  })(List);
