import React from 'react'
import services from "../../shared/services.json";

function Service(props) {
    return (
        let { index } = props.match.params;
        let { name, price, description } = services[index]
        <div>
            <h1>INDIVIDUAL SERVICE</h1>
        </div>
    )
}

export default Service
