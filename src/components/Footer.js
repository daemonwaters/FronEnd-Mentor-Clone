import React from 'react'
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
            <div className="footer-text">
                <div className="col">
                <h3>FRONTEND MENTOR</h3>
                <p>Gain real experience of building websites and providing code reviews. Build your portfolio and help others achieve their goals.</p>
                </div>
                <div className="col">
                <h3>EXPLORE</h3>
                <ul>
                    <li>challanges</li>
                    <li>solutions</li>
                    <li>resources</li>
                    <li>unlock pro</li>
                    <li>hire developers</li>
                </ul>
                </div>
                <div className="col">
                <h3>COMMUNITY</h3>
                <ul>
                    <li>contact us</li>
                    <li>slack</li>
                    <li>FAQs</li>
                    <li>blog</li>
                </ul>
                </div>
            </div>
            <div className="icons">
                <FaTwitter/>
                <FaLinkedin/>
                <FaFacebook/>
            </div>
            </div>
            <div className="end">
                <span>© Frontend Mentor 2021</span>
                <span>terms</span>
                <span>cookie policy</span>
                <span>privacy policy</span>
                <span>liecense</span>
            </div>
        </footer>
    )
}

export default Footer
