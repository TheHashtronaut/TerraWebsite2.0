import React from 'react';
import './Footer.css';
import InstagramLogo from './assets/instagram-logo.png';
import YouTubeLogo from './assets/youtube-logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-left">
                    <h2 className="footer-logo">TERRA STUDIOS</h2>
                    <p>Temp Address</p>
                    <p>City, State, ZIP</p>
                    <p>Country</p>
                </div>

                {/* Center Section */}
                <div className="footer-center">
                    <p>+1 123 456 7890</p>
                    <p>
                        <a href="mailto:tempemail@example.com" className="footer-email">
                            tempemail@example.com
                        </a>
                    </p>
                </div>

                {/* Right Section */}
                <div className="footer-right">
                    <a href="https://www.instagram.com/studiosterra/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <img src={InstagramLogo} alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCdX_mhAZ6psMVYPRvkJ4SFQ" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <img src={YouTubeLogo} alt="YouTube" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
