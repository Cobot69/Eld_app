import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
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

      {/* Main Content */}
      <main>
        <p>Your old age is our responsibility. We offer solutions for a comfortable and secure future.</p>
        <div className="container">
          {/* Pension Plans Card */}
          <div className="card">
           <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlwmY5R_NvF7g2G0bApSHgBeuY8cRW4hJYaj7i0fd46pZu8ZEL" alt="Pension Plans" />
           <h2>Pension Plans</h2>
            <p>Ensure a worry-free retirement with our comprehensive pension plans.</p>
            <Link to="/select" className="explore-link">Explore Plans</Link>
          </div>
          {/* Health Schemes Card */}
          <div className="card">
           <img src="https://images.pond5.com/insurance-concept-heart-and-palm-illustration-064381154_iconl.jpeg" alt="Health Schemes" />
           <h2>Health Schemes</h2>
            <p>Protect your health in your golden years with our tailored health schemes.</p>
            <Link to="/health_scheme" className="explore-link">View Health Plans</Link>
          </div>
        </div>
        {/* About Section */}
        <section id="about">
          <h2>About Us</h2>
          <p>ElderNet provides secure pension and health schemes to ensure your golden years are stress-free.</p>
        </section>
      </main>

      {/* Footer */}
      <footer>© 2024 ElderNet - All Rights Reserved</footer>
    </div>
  );
};

export default Home;
