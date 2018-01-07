import React, { Component } from 'react'
import Box from "./Box"
import "./index.css"

function App(props) {  
    
    return (
        <div className="app-wrapper">
           <Box boxStuff = {{
            color: {backgroundColor: "red"},
            title: "REDBOX",
            subtitle: "a box for your bad choices",
            info: "In this box you decided to leave all the times you feel bad for arguiung with your loved ones"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "yellow"},
            title: "the sun",
            subtitle: "here's where the warmth is",
            info: "the truth is out there, Debra"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "green"},
            title: "Mother EARTH",
            subtitle: "she cried for your sins",
            info: "but she'll DIE when she's good and ready"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "brown"},
            title: "plain Oak tree",
            subtitle: "a sturdy companion",
            info: "Trees gave us a second chance, maybe you deserve to give yourself one"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "#ff2400"},
            title: "Red Leather",
            subtitle: "yllow leather is for chumps",
            info: "You're a rose petal, just waiting for a white sheet"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "grey"},
            title: "For When Black's Too Expensive",
            subtitle: "Think of it as a discount accent",
            info: "Fifty shades to say \"I love You, but you need to try harder\""
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "#cc7722"},
            title: "Spice Camp",
            subtitle: "You can go this summer",
            info: "find out which herbs will cause infection"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "#ffdab9"},
            title: "Secret Emoji",
            subtitle: "for when you need it",
            info: "a hyegine product or a sented candel? Por Que No Los Dos?"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "#9b111e"},
            title: "Important Curtains",
            subtitle: "Not cuz their nice, but sentimental value",
            info: "These are the curtains your dad used to strangle his first wife."
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "olive"},
            title: "A Delecitessen",
            subtitle: "One time you thought it'd be nice to go here for lunch",
            info: "but you got Chipotle instead"
        }} 
           ></Box>
           <Box boxStuff = {{
            color: {backgroundColor: "violet"},
            title: "Cute",
            subtitle: "you'd rock this on a friday",
            info: "I need you to trust me on this one."
        }} 
           ></Box>
        </div>
    )
}

export default App;
