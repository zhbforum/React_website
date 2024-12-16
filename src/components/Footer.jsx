import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo-section">
                        <img src="/images/logo.png" alt="Logo" className="footer-logo" />
                        <p className="footer-description">
                        Creative design agency.<br/>
                        All Rights Reserved 2024 
                        
                        </p>
                        <div className="footer-social">
                            <img src="/images/facebook.png" alt="Facebook" />
                            <img src="/images/instagram.png" alt="Instagram" />
                            <img src="/images/xlogo.png" alt="Xlogo" />
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-column">
                        <h4>Useful Link</h4>
                        <ul>
                            <li>Home</li>
                            <li>Company News</li>
                            <li>About us</li>
                            <li>Projects</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li>Website Design</li>
                            <li>Logo and Branding</li>
                            <li>Mobile App</li>
                            <li>Search Engine</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;