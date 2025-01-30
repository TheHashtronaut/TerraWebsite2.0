import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Importing the images
import InstagramLogo from './assets/instagram-logo.png';
import YouTubeLogo from './assets/youtube-logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">TERRA STUDIOS</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/info">Info</Link>
                </li>
                <li>
                    <Link to="/enquiries">Enquiries</Link>
                </li>
                <li>
                    <Link to="/media">Media</Link>
                </li>
            </ul>
            <div className="social-links">
                <a href="https://www.instagram.com/studiosterra/" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramLogo} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/channel/UCdX_mhAZ6psMVYPRvkJ4SFQ" target="_blank" rel="noopener noreferrer">
                    <img src={YouTubeLogo} alt="YouTube" className="social-icon" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
