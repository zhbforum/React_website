import React from "react";
import './Footer.css';
import logo from '../assets/images/logo.png';
import email from '../assets/images/email.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import location from '../assets/images/location.png';
import phone from '../assets/images/phone.png';
import twitter from '../assets/images/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo-section">
                        <img src={logo} alt="Logo" className="footer-logo" />
                        <p className="footer-description">
                            Creative design agency.<br />
                            All Rights Reserved 2024

                        </p>
                        <div className="footer-social">
                            <img src={facebook} alt="Facebook" />
                            <img src={instagram} alt="Instagram" />
                            <img src={twitter} alt="Twitter" />
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
                    <div className="footer-column-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><img src={location} alt="Adress" className="icon" />
                            <span>41 Pilgrm Avenue, Chevy Chase</span>
                            </li>
                            <li><img src={phone} alt="Phone" className="icon" />
                            <span>+01234 567 890</span>
                             </li>
                            <li><img src={email} alt="Email" className="icon" />
                            <span>info@agency.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;