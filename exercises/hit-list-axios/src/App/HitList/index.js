// HIT LIST -- COMPONENT
// ------------------------------
import React, { Component } from 'react';

import Loading from "../../shared/Loading"
import Hit from "./Hit"

import "./HitList.css"

import axios from "axios";
const hitListURL = "http://api.vschool.io:6543/hitlist.json"

export default class HitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            loading: true
        }

    }

    componentDidMount() {
        axios.get(hitListURL)
        .then( (response) => {
            this.setState({
                hits: response.data,
                loading: false
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        let { loading, hits } = this.state
        const hitComponents = hits.map((hit, i) => {
            return <Hit key={i + hit.name} 
                hitData={hit} />
        })
        return (
            loading ?
            <Loading />
            : 
            <div className="hit-list-wrapper">
                {hitComponents}
            </div>
        )
    }
}
