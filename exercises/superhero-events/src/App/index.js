import React, { Component } from 'react';

import Superhero from "./Superhero";

import superheroes from "../shared/superheroes.json";

import "./index.css"

function App() {
    let alertHero = (catchphrase) => { 
        alert(catchphrase)
    };
    return (
            <div className="app-wrapper">
                {superheroes.map((superhero) => {
                    return <Superhero superhero={superhero} alertHero={alertHero} />
                })}
            </div>
        )
}

export default App
