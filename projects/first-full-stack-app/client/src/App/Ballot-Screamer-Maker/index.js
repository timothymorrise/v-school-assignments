// BALLOT SCREAMER -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux";

// IMPORT FROM FILES -- ACTION CREATOR / COMPONENTS / CSS
import { getCategories } from "../../redux/reducers/categories-reducer"
import FormDisplay from "./FormDisplay"
import Form from "./Form"
import BallotDisplay from "./BallotDisplay"
import "./BallotScreamerMaker.css"

class BallotScreamer extends Component {

    componentDidMount() {
        let { award_id } = this.props.match.params
        this.props.getCategories(award_id)
    }

    componentWillReceiveProps(nextProps) {
        let { award_id } = this.props.match.params
        let nextId = nextProps.match.params.award_id
        if (award_id !== nextId) {
            this.props.getCategories(nextId);
        }
    }

    render() {
        let { award_id } = this.props.match.params
        let { categoryLoading, categories } = this.props
        let catNum = this.props.match.params.category_num
        let category = categories.filter(category => {
            let { order_number } = category
            if (catNum === order_number) return category
        })[0]

        return (
            categoryLoading ?
                <div>
                    <BallotDisplay />
                </div>
                :
                <div>
                    <h1>{category.award_name}</h1>
                    <div className="ballot-screamer-form-wrapper">
                        <FormDisplay categoryId={category._id} />
                        <Form categoryId={category._id} awardId={award_id} />
                    </div>
                    <BallotDisplay />
                </div>
        )
    }
}

// EXPORTS
const mapStateToProps = (state) => {
    return {
        categories: state.categories.data,
        categoryLoading: state.categories.loading
    }
}

export default connect(mapStateToProps, { getCategories })(BallotScreamer)
