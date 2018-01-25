import React from 'react';

import "./index.css";

function Superhero(props) {
    let { name, imageURL, catchphrase } = props.superhero;
    let  {alertHero} = props
    return (
            <div className="superhero">
                <h1 onClick={() => alertHero(catchphrase)} >{name}</h1>
                <div onClick={() => alertHero(catchphrase)} className ="superhero-image" 
                    style={{backgroundImage: `url(${imageURL})`}} >
                </div>
            </div>
        )
}

export default Superhero;

