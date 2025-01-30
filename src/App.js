import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import Welcome from './components/Welcome';
import Info from './components/Info';
import Enquiries from './components/Enquiries';
import Media from './components/Media';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="/enquiries" element={<Enquiries />} />
                        <Route path="/media" element={<Media />} />
                    </Routes>
                </div>
                <Footer /> {/* Footer component */}
            </div>
        </Router>
    );
}

export default App;
