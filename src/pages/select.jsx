import React from 'react';
import { Link } from 'react-router-dom';
import './select_style.css';

const Select = () => {
  return (
      <div>
        {/* Header */}
        <header className="header">
          <div className="header-container">
            <div className="branding">
              <h1>
                Elder<span>Net</span>
              </h1>
              <p>Secure your health, secure your future.</p>
            </div>
          </div>
        </header>

      {/* Main Section */}
      <main>
        <p>
          Your old age is our responsibility. We offer solutions for a comfortable and secure future.
        </p>

        <div className="container">
          <div className="card">
           <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlwmY5R_NvF7g2G0bApSHgBeuY8cRW4hJYaj7i0fd46pZu8ZEL" alt="Private Pension Plans" />
           <h2>Private Pension Plans</h2>
            <p>Ensure a worry-free retirement with our comprehensive private pension plans.</p>
            <Link to="/pension" className="explore-link">
              Explore Plans
            </Link>
          </div>

          <div className="card">
           <img src="https://www.shutterstock.com/image-vector/happy-senior-citizen-couple-stand-on-2447448299" alt="Government Pension Plans" />
           <h2>Government Pension Plans</h2>
            <p>Secure your future with reliable government-backed pension plans.</p>
            <Link to="/govt" className="explore-link">
              Explore Plans
            </Link>
          </div>

          <div className="card">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK7iUkn0ylRJTnaZWm5FM45x98LJH5rSJPx6VJjX3KhHlrEyw" alt="FD Returns" />
           <h2>FD Returns</h2>
            <p>Maximize your savings with the best fixed deposit rates available.</p>
            <Link to="/bank" className="explore-link">
              Explore Plans
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>&copy; 2024 ElderNet - All Rights Reserved</footer>
    </div>
  );
};

export default Select;
