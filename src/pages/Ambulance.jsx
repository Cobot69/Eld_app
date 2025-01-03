import React, { useEffect } from 'react';
import './Ambulance.css';

const Transport = () => {
  const ambulances = [
    {
      id: 1,
      hospitalName: "Sushruta Multispeciality Hospital",
      type: "Advanced Life Support",
      city: "Hubli",
      area: "Vidya Nagar",
      Website: "https://sushrutahospitals.com/",
      phone: "08362378600",
      features: ["ICU Equipment", "Oxygen Support", "Trained Paramedics", "Stretcher"]
    },
    {
      id: 2,
      hospitalName: "M M Joshi Eye Hospital - Hubli",
      type: "Eye Hospital",
      city: "Hubli",
      area: "Sadashiv nagar, Hosur",
      Website: "http://www.mmjoshieyeinstitute.com/",
      phone: "+91-9876543211",
      features: ["Basic Medical Equipment", "Eye care", "Wheelchair Access", "Stretcher"]
    },
    {
      id: 3,
      hospitalName: "Sanjeevini Hospital",
      type: "General Hospital",
      city: "Hubli",
      area: "Vidya Nagar",
      Website: "https://www.sanjeevinihospital.com/",
      phone: "08362373303",
      features: ["Basic Medical Equipment", "Multispeciality", "Wheelchair Access"]
    },
    {
      id: 4,
      hospitalName: "Vivekanand General Hospital",
      type: "General Hospital",
      city: "Hubli",
      area: "Deshpande Nagar",
      Website: "https://vghhubli.com/",
      phone: "+08362251002",
      features: ["Basic First Aid", "Stretcher"]
    }
  ];

  useEffect(() => {
    renderAmbulances();
  }, []);

  const renderAmbulances = () => {
    const ambulanceList = document.getElementById('ambulanceList');
    ambulanceList.innerHTML = ambulances.map(ambulance => `
      <div class="ambulance-card" onclick="selectAmbulance(${ambulance.id})" id="ambulance-${ambulance.id}">
        <div class="hospital-name">
          <i class="fas fa-hospital"></i> ${ambulance.hospitalName}
        </div>
        <div class="ambulance-type">
          <i class="fas fa-ambulance"></i> ${ambulance.type}
        </div>
        <div class="ambulance-details">
          <div><i class="fas fa-map-marker-alt"></i> ${ambulance.area}, ${ambulance.city}</div>
          <div><i class="fas fa-list"></i> ${ambulance.features.join(", ")}</div>
        </div>
        <a href="tel:${ambulance.phone}" class="contact-button">
          <i class="fas fa-phone"></i> ${ambulance.phone}
        </a>
      </div>
    `).join('');
  };

  const selectAmbulance = (id) => {
    document.querySelectorAll('.ambulance-card').forEach(card => {
      card.classList.remove('selected');
    });
    document.getElementById(`ambulance-${id}`).classList.add('selected');
    document.getElementById('booking-form').style.display = 'block';
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pickup = document.getElementById('pickup');
          pickup.value = `${position.coords.latitude}, ${position.coords.longitude}`;
        },
        error => {
          alert('Error detecting location: ' + error.message);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const showBookingConfirmation = () => {
    document.querySelector('.popup-overlay').classList.add('show');
    document.querySelector('.confirmation-popup').classList.add('show');
  };

  const closePopup = () => {
    document.querySelector('.popup-overlay').classList.remove('show');
    document.querySelector('.confirmation-popup').classList.remove('show');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedAmbulance = document.querySelector('.ambulance-card.selected');
    if (!selectedAmbulance) {
      alert('Please select an ambulance first');
      return;
    }
    showBookingConfirmation();
  };

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="branding">
            <i className="fas fa-ambulance"></i>
            <h1>Emergency <span>Ambulance</span></h1>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="booking-card">
          <div className="emergency-badge">
            <i className="fas fa-exclamation-circle"></i> Emergency Services
          </div>

          <div className="ambulance-cards" id="ambulanceList">
            {/* Ambulance cards will be inserted here by JavaScript */}
          </div>

          <form className="booking-form" id="booking-form" style={{ display: 'none' }} onSubmit={handleSubmit}>
            <div className="location-group">
              <div className="form-group">
                <label htmlFor="pickup">
                  <i className="fas fa-map-marker-alt"></i> Pick-Up Location:
                </label>
                <input type="text" id="pickup" placeholder="Enter pick-up location" required />
                <button type="button" className="location-detect" onClick={detectLocation}>
                  <i className="fas fa-crosshairs"></i>
                </button>
              </div>
            </div>

            <button type="submit" className="submit-button">
              <i className="fas fa-ambulance"></i> Confirm Booking
            </button>
          </form>
        </div>

        <div className="help-section">
          <h3><i className="fas fa-phone-alt"></i> Emergency Contacts</h3>
          <p>24/7 Emergency Response</p>
          <a href="tel:102" className="help-button">
            <i className="fas fa-phone"></i> Dial 102
          </a>
        </div>
      </div>

      <div className="popup-overlay"></div>
      <div className="confirmation-popup">
        <h2>Ambulance Booked Successfully!</h2>
        <p>Your ambulance has been dispatched and will arrive shortly.</p>
        <p>Please stay calm and keep your phone nearby.</p>
        <button className="action-button" onClick={closePopup}>OK</button>
      </div>
    </div>
  );
};

export default Transport;
