import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomePage.css";

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <nav>
            <h1>Elder<span>Net</span></h1>
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><a href="#services">Services</a></li>
              <li><Link to="/Cabbook">Cabbook</Link></li>
              <li><Link to="/OldAgeHome">Old_Age_Homes</Link></li>
              <li><Link to="/Ambulance">Ambulance</Link></li> 
              <li><Link to="/Grocery">Grocery</Link></li> 
              <li><Link to="/Medical">Medical</Link></li> 
              <li><Link to="/home">Healthcare</Link></li> 
              <li><Link to="/contact">contact</Link></li>
              {!user ? (
                <li><Link to="/register">Registration/Login</Link></li>
              ) : (
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    Logout ({user.username || user.phone})
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* Image Carousel with Limited Width */}
      <div className="carousel-wrapper">
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={1500}>
          <div>
            <img src="https://i.postimg.cc/kgckZKcd/shine1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="src/images/old_tech.png" alt="Image 2" />
          </div>
          <div>
            <img src="src\images\men_laugh.png" alt="Image 3" />
          </div>
          <div>
            <img src="https://i.postimg.cc/QNTvDRbm/shine4.jpg" alt="Image 4" />
          </div>
          <div>
            <img src="src\images\menage.png" alt="Image 5" />
          </div>
        </Carousel>
      </div>
       
{/* Hero Section */}
<section className="hero">
  <Carousel showThumbs={false} autoPlay infiniteLoop interval={1500} showStatus={false}>
    <div className="blog">
      <h2>Welcome to ElderNet: Empowering Senior Citizens with Modern Solutions</h2>
      <p>Senior citizens deserve a life filled with comfort and care. ElderNet provides a range of services that help elderly individuals live independently while ensuring their well-being. From health care to transport, ElderNet ensures everything is at your doorstep.</p>
    </div>
    <div className="blog">
      <h2>How ElderNet Helps Senior Citizens</h2>
      <p>With ElderNet, senior citizens no longer need to struggle with daily chores. We offer services that range from healthcare and doctor appointments to grocery shopping, transportation, and more. We make sure that all essentials are just a tap away, helping seniors live their lives with ease and dignity.</p>
    </div>
    <div className="blog">
      <h2>Transforming Senior Care, One Service at a Time</h2>
      <p>Our services are designed to make senior citizens' lives simpler, safer, and more enjoyable. ElderNet's tailored solutions such as transportation for appointments, home-delivery of medicines, and grocery shopping ensure that seniors don’t have to worry about the little things in life anymore.</p>
    </div>
    <div className="blog">
      <h2>Ensuring Comfort and Independence with ElderNet</h2>
      <p>ElderNet empowers senior citizens to maintain their independence while receiving the support they need. With on-demand access to transport, medical assistance, and other essential services, seniors can enjoy their golden years with ease, all while staying connected to their families and communities.</p>
    </div>
  </Carousel>
</section>


      {/* Services Section */}
      <section id="services" className="services-nav">
        <h2 className="services-title">Our Services</h2>
        <div className="services-container">
          <div className="service-box">
            <img src="src/images/oldagehome.png" alt="Old Age Home" />
            <Link to="/OldAgeHome">Old Age Home</Link>
          </div>
          <div className="service-box">
            <img src="src/images/car.jpeg" alt="Transport Booking" />
            <Link to="/CabOptions">Transport Booking</Link>
          </div>
          <div className="service-box">
            <img src="src/images/grocery.png" alt="Grocery/Medicine Delivery" />
            <Link to="/GroceryOptions">Grocery/Medicine Delivery</Link>
          </div>
          <div className="service-box">
            <img src="src/images/scheme.png" alt="Healthcare" />
            <Link to="/home">Healthcare</Link>
          </div>
          <div className="service-box">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Details about how to contact us...</p>
      </section>

      <footer className="footer">
        <p>© 2024 Senior Citizen Helpline. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
