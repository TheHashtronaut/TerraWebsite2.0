import React from 'react';
import './Welcome.css';
import welcomeVideo from './assets/welcome-video.mp4'; // Import the video file
import websitePic from './assets/website-pic.png'; // Import the image file

function Welcome() {
    return (
        <div className="main-content">
            {/* Video Section */}
            <div className="welcome-container">
                {/* Video Background */}
                <video className="welcome-video" autoPlay loop muted>
                    <source src={welcomeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Content */}
                <div className="welcome-overlay">
                    <h1>Welcome to Terra Studios!</h1>
                    <p>We are excited to have you here. Explore our site to learn more about what we do!</p>
                </div>
            </div>

            {/* Flexible Section with Image and Button */}
            <div className="dynamic-section">
                <div className="image-container">
                    <img src={websitePic} alt="Terra Studios Website" className="dynamic-image" />
                    <a href="/info" className="learn-more-button">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
