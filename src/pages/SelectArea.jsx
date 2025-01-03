import React from 'react';
import { useNavigate } from 'react-router-dom';
import './select-area.css';

const SelectArea = () => {
  const navigate = useNavigate();

  return (
    <div className="select-area">
      <header className="header">
        <h1>Select the store</h1>
      </header>
      <div className="content">
        <button className="action-button" onClick={() => navigate('/grocery')}>
          Grocery Stores
        </button>
        <button className="action-button" onClick={() => navigate('/medical')}>
          Medical Supplies
        </button>
      </div>
    </div>
  );
};

export default SelectArea;
