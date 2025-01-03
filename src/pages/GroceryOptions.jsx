import React from 'react';
import { Link } from 'react-router-dom';
import './GroceryOptions.css'; // Make sure to create this CSS file

const GroceryOptions = () => {
  return (
    <div className="grocery-options-container">
      <h2>Grocery/Medicine Delivery</h2>
      <p>Select the type of delivery service you need:</p>
      <div className="options">
        <div className="option-box">
          <Link to="/Medical">
            <img src="https://via.placeholder.com/150" alt="Medicine Delivery" />
            <h3>Medicine Delivery</h3>
            <p>Get your medicines delivered to your doorstep.</p>
          </Link>
        </div>
        <div className="option-box">
          <Link to="/Grocery">
            <img src="https://via.placeholder.com/150" alt="Grocery Delivery" />
            <h3>Grocery Delivery</h3>
            <p>Get your groceries delivered to your doorstep.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroceryOptions;