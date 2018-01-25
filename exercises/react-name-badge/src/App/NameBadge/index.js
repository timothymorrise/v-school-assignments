// NAME BADGE -- COMPONENT
// ------------------------------

import React, { Component } from 'react'

import Form from "./Form"
import BadgeList from "./BadgeList"

export default class NameBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [ ]
        }
        this.addBadge = this.addBadge.bind(this);
    }

   addBadge(badge) {
        this.setState((prevState) => {
            return {
                badges: [badge, ...prevState.badges]
            }
        })
   }

    render() {
        console.log(this.state.badges)
        let { badges } = this.state
        const addBadge = this.addBadge
        return (
            <div>
                <Form addBadge={addBadge} />
                <BadgeList badges={badges} />
            </div>
        )
    }
}
