// BADGE -- COMPONENT
// ------------------------------

import React from 'react'

function Badge(props) {
    let { 
        firstName,
        lastName,
        email,
        placeOfBirth,
        phone,
        favoriteFood,
        about,
            } = props.badge
    let phoneBadge = `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`
    return (
        <div>
            <p>Name: {firstName} {lastName}</p>
            <p>Phone: {phoneBadge}</p>
            <p>Place of birth: {placeOfBirth}</p>
            <p>Favorite food: {favoriteFood}</p>
            <p>Email: {email}</p>
            <p id="about-badge">{about}</p>
        </div>
    )
}

export default Badge
