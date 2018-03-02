// FORM DISPLAY -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";

// IMPORT FROM FILES -- COMPONENTS
import "./FormDisplay.css"
import DisplayCard from "./DisplayCard"
import { getNominees } from "../../../redux/reducers/nominees-reducer"

class FormDisplay extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { categoryId } = this.props
        this.props.getNominees(categoryId)
    }
    
    componentWillReceiveProps(nextProps) {
        let { categoryId} = this.props
        let nextId = nextProps.categoryId
        if ( categoryId !== nextId ) {
            this.props.getNominees(nextId);
        }
    }

    render() {
        let nomineeData = this.props.nominees.data
        let { loading } = this.props.nominees
        const generateDisplayCards = nomineeData.map( (nominee, index) =>
                <DisplayCard {...nominee} key={index} />
            )

        return (
            <div className="form-display">
                {generateDisplayCards}
            </div>
        )
    }
}

// EXPORTS
const mapStateToProps = (state) => {
    return {
        nominees: state.nominees
    }
}

export default connect(mapStateToProps, {getNominees} )(FormDisplay)