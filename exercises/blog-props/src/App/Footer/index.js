//FOOTER
//-----------------------------------------
import React from 'react'

import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-icons">
                    <a href="">
                        <div className="footer-icon-twitter footer-icon"></div>
                    </a>
                    <a href="">
                        <div className="footer-icon-facebook footer-icon"></div>
                    </a>
                    <a href="">
                        <div className="footer-icon-github footer-icon"></div>
                    </a>
                </div>
                <p>Copyright &copy; Your Website 2017 </p>
            </div>
        </footer>
    )
}

export default Footer
