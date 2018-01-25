// LIST

import React from 'react'

import Item from "./Item"

import "./index.css"

function List() {
    let info = [
        {
            name: "Regelah pea",
            description: "Justy your average pea.",
            price: "10",
            imageURL: "https://igennus.com/wp-content/uploads/2014/05/bigstock-Single-Pea-On-A-Plate-2801004.jpg",
            color: "#78910f"

        },
        {
            name: "Mattress pea",
            description: "Put it under a mattress to prove your worth to society!",
            price: "250",
            imageURL: "https://i.pinimg.com/236x/10/2a/aa/102aaa0eeb9c562d365dcc8b4c6034b5--princess-alice-princess-and-the-pea.jpg",
            color: "thistle"

        },
        {
            name: "Glass pea",
            description: "Not edible, just valuble. We worked really hard on this one",
            price: "30000",
            imageURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRb8nxD_IIKSrgKQBLH2XPrG68Th-L4zMh4tiHSmR0w6zfWFlbv7wuI0RblVxPg8cnyeZNQ1wOz&usqp=CAE",
            color: "skyblue"
        },
    ]

    return (
        <div className="list-wrapper">
            <div className="list">
                {info.map((itemInfo) => {
                    return <Item info={itemInfo} />
                })}

            </div>
        </div>
    )
}

export default List
