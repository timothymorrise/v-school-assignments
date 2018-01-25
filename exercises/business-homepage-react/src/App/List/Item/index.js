// ITEM -- COMPONENT
// --------------------------------

import React from 'react'

import "./index.css"

function Item(props) {
    let { name, description, price, imageURL, color } = props.info
    return (
        <div className="item" style={{backgroundColor: color }}>
            <div className="item-image" style ={{backgroundImage: `url(${imageURL})`}} ></div>
            <h1>{name}</h1>
            <h2>{price} $</h2>
            <p>{description}</p>
        </div>
    )
}

export default Item
