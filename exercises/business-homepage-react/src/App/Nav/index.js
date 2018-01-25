import React, { Component } from 'react'
import "./index.css"

function Nav(props) {
    
    return (
    <nav style={props.parentStyle}> 
         {props.links.map( (link) =>  <a href={link.href}>{link.name}</a> )}  
    </nav>
    )
}

export default Nav
