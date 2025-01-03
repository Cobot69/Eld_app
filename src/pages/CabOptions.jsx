import React from 'react';
import { Link } from 'react-router-dom';
import './CabOptions.css'; // Make sure to create this CSS file

const CabOptions = () => {
  return (
    <div className="cab-options-container">
      <h2>Transport Booking</h2>
      <p>Select the type of transport service you need:</p>
      <div className="options">
        <div className="option-box">
          <Link to="/Ambulance">
            <img src="src\images\ambulance.webp" alt="Ambulance" />
            <h3>Ambulance</h3>
            <p>Emergency medical transport services.</p>
          </Link>
        </div>
        <div className="option-box">
          <Link to="/Cabbook">
            <img src="src\images\cab.jpg" alt="Cab" />
            <h3>Cab</h3>
            <p>Book a cab for your travel needs.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CabOptions;