import React, { Component } from 'react'
import "./index.css"

function Box (props) {
    let boxStuff = props.boxStuff
    return (
        <div className="box" style={boxStuff.color}>
            <h1>{boxStuff.title}</h1>
            <h2>{boxStuff.subtitle}</h2>
            <p>{boxStuff.info}</p>
        </div>
    )
}

export default Box