// CONTACT -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'
import { Link } from "react-router-dom";

// IMPORT FROM FILES -- CSS
import "./Contact.css"

function Contact() {
    return (
        <main className="contact">
            <h3>Phone: 801-560-6195</h3>
            <h3>Email: timothy.morrise@gmail.com</h3>
            <a href="https://www.linkedin.com/in/timothy-morrise-1086574b/"><h3>Linkdin</h3></a>
            <a href="https://github.com/timothymorrise"><h3>Github</h3></a>
        </main>
    )
}

export default Contact
