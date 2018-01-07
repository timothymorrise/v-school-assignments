import React, { Component } from 'react'
import Card from "./Card";

function App() {
    let vacationSpots = [  
        {
          place: "Meridian, Idaho",
          price: "$40",
          timeToGo: "spring"
        },{
          place: "Cancun",
          price: "$900",
          timeToGo: "winter"
        },{
          place: "China",
          price: "$1200",
          timeToGo: "fall"
        },{
          place: "Russia",
          price: "$1100",
          timeToGo: "summer"
        },{
          place: "Lebanon",
          price: "$400",
          timeToGo: "spring"
        }
      ]
    
    return (
        <div className="app-wrapper">
            <Card vacationSpots={vacationSpots}>
            </Card>
        </div>
    )
}


export default App