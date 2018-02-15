// BALLOT SCREAMER -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux";

// IMPORT FROM FILES
import { getCategories } from "../../redux/reducers/categories-reducer"
import FormDisplay from "./FormDisplay"
import Form from "./Form"
import BallotDisplay from "./BallotDisplay"

class BallotScreamer extends Component {

    componentDidMount() {
        let { award_id } = this.props.match.params
        this.props.getCategories(award_id)
    }

    componentWillReceiveProps(nextProps) {
        let { award_id } = this.props.match.params
        let nextId = nextProps.match.params.award_id
        if ( award_id !== nextId ) {
            this.props.getCategories(nextId);
        }
    }

    render() {
        let catLoading = this.props.categories.loading
        let catArr = this.props.categories.data
        let catNum = this.props.match.params.category_num
        let categoryData = catArr.filter(category => {
            let { order_number } = category
            if (catNum === order_number) return category
        })[0]

        return (
            catLoading ?
            <div> 
                <BallotDisplay />
            </div>
            :
            <div>
                <h1>{categoryData.award_name}</h1>
                <FormDisplay categoryId = {categoryData._id}/> 
                <Form categoryId = {categoryData._id}/>
                <BallotDisplay />
            </div>
        )
    }
}

// EXPORTS
const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, { getCategories })(BallotScreamer)
