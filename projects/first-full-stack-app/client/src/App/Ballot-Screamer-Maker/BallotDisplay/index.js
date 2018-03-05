// BALLOT DISPLAY -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";

// IMPORT FROM FILES
import "./BallotDisplay.css";
import { getNominees } from "../../../redux/reducers/nominees-reducer"
import { getBallots } from "../../../redux/reducers/ballots-reducer"


class BallotDisplay extends Component {

    componentDidMount() {
        let { awardId } = this.props
        this.props.getNominees();
        this.props.getBallots(awardId);
    }

    componentWillReceiveProps(nextProps) {
        let { awardId } = this.props
        let nextId = nextProps.awardId
        if (awardId !== nextId) {
            this.props.getBallots(nextId);
        }
    }

    render() {
        let { awards, awardId, categories, nominees, ballots } = this.props
        let title = () => {
            let award = awards.filter(award => {
                return (award._id === awardId)
            })[0]
            return <div>
                <h1>{award.awards_show_name}</h1>
            </div>
        }
        let votes = () => {
            ballots.sort((ballot1, ballot2) => {
                let order1 = categories.filter(category => {
                    return (category._id === ballot1.category_id)
                })[0].order_number
                let order2 = categories.filter(category => {
                    return (category._id === ballot2.category_id)
                })[0].order_number
                return (order1 - order2)
            })
            return ballots.map((ballot) => {
                let categoryTitle = categories.filter(category => {
                    return (category._id === ballot.category_id)
                })[0].award_name
                let predictedNominee = nominees.filter(nominee => {
                    return (nominee._id === ballot.predicted)
                })[0]
                let favoriteNominee = nominees.filter(nominee => {
                    return (nominee._id === ballot.favorite)
                })[0]
                let screamingAtNominee = nominees.filter(nominee => {
                    return (nominee._id === ballot.screamingAt)
                })[0]

               return <div className="ballot-display-category" key={ballot._id}>
                   <h2>{categoryTitle}</h2>
                   <h3><span className="ballot-display-bold">Predicted winner:</span> {predictedNominee.recipient} for <span className="ballot-display-italics">{predictedNominee.film_name}</span></h3>
                   <h3><span className="ballot-display-bold">Favorite to win:</span> {favoriteNominee.recipient} for <span className="ballot-display-italics">{favoriteNominee.film_name}</span></h3>
                   <h3><span className="ballot-display-bold">Would like to Scream At:</span> {screamingAtNominee.recipient} for <span className="ballot-display-italics">{screamingAtNominee.film_name}</span></h3>
               </div>
            })
        }
        console.log("ballots", ballots)
        return (
            <div className="ballot-display">
                {title()}
                {votes()}
            </div>
        )
    }
}


// EXPORTS
const mapStateToProps = (state) => {
    return {
        awards: state.awards.data,
        categories: state.categories.data,
        nominees: state.nominees.data,
        ballots: state.ballots.data
    }
}

export default connect(mapStateToProps, { getNominees, getBallots })(BallotDisplay);