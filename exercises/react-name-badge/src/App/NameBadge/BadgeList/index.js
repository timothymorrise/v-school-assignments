// BADGE LIST -- COMPONENT
// ------------------------------
import React from 'react'

import Badge from "./Badge"

function BadgeList(props) {
    let { badges } = props
    const generateBadges = badges.map((badge, i) => {
        let { firstName, lastName } = badge
        return <Badge key={i + firstName + lastName} 
            badge={badge}/>
    })
    return (
        <div>
            {generateBadges}
        </div>
    )
}

export default BadgeList
