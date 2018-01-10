//SERVICE*S*
import React from 'react'
import { Link, Route, Switch } from "react-router-dom"
import services from "../../shared/services.json"
import Service from "./Service"

import "./index.css";


function Services(props) {
    return (
        <div>
            <h1>Services</h1>
            <div className="service-links">
                {services.map((service, i) => {
                    let { name } = service
                    return <Link key={i} to={`-services/${i}`}>{name}</Link>
                })}
                <Switch>
                    <Route path="/services/:index" component={Service} />
                </Switch>
            </div>
        </div>
    )
}

export default Services
