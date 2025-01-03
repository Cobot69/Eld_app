import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Medical.css';  // Adjust the path as needed

const Medical = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const navigate = useNavigate();

  const medicalData = {
    "vidyanagar": [
      {
        name: "MedPlus",
        address: "Vidyanagar Main Road",
        timings:"8:00 AM - 10:00 PM",
        phone: "08362244555"
      },
      {
        name: "Apollo Pharmacy Sirur Park Hubli",
        address: "Ground Floor, No. 3552/57, opp. Canara Bank, Shirur Park, Vidya Nagar, Hubballi, Karnataka 580031",
        timings:"7:00 AM - 11:00 PM",
        phone: "08044462730",
        website: "https://www.apollopharmacy.in/?utm_source=gmb&utm_medium=organic&utm_campaign=sulekhapromanage-apollo-pharmacy"
      },
      // Additional stores can be added here if required
    ],
    "keshwapur": [
      {
        name: "Wellness Forever Pharmacy - Keshwapur, Hubballi",
        address: "Ground Floor, Yash Building, Beside Canara Bank Kusugal Road, Vasant Nagar, New P & T Colony, Keshwapur, Hubballi, Karnataka 580023",
        timings: "24 Hours",
        phone: "09611360474",
        website: "https://www.wellnessforever.com/"
      },
      {
        name: "Apollo Pharmacy Keshwapur Hubli 2",
        address: "Ground Floor, Diamond Castle Apartments, No. 6, Sulla Rd, opposite Jain Mandir, Old Badami Nagar, Bengeri Extension, Keshwapur, Hubballi, Karnataka 580023",
        timings:"7:00 AM - 11:00 PM",
        phone: "08362221486",
        website: "https://www.apollopharmacy.in/?utm_source=gmb&utm_medium=organic&utm_campaign=sulekhapromanage-apollo-pharmacy"
      }
    ],
    "gokul_road": [
      {
        name: "Wellness Forever Pharmacy - Gokul Road, Hubli",
        address: "Shop No 1, Ground Floor, Gokul Rd, nearby to More Supermarket, Apoorva Nagar, Basaveshvar Nagar, Hubballi, Karnataka 580030",
        timings: "24 Hours",
        phone: "08657002375",
        website: "https://wellnessforever.com/"
      },
      {
        name: "Apollo Pharmacy Gokul Road-Hubli",
        address: "Shop.No.5&6, Ground floor, water tank, PID.No.36A/1043, Sy.No.611A, Ward, No.36A, Gokul Rd, near Nehru Nagar, Hubballi, Karnataka 580030",
        timings: "7:00 AM - 11:00 PM",
        phone: "08044462939",
        website: "https://www.apollopharmacy.in/?utm_source=gmb&utm_medium=organic&utm_campaign=sulekhapromanage-apollo-pharmacy"
      }
    ],
    "railway_station_road": [
      {
        name: "Wellness Forever Pharmacy - Station Road, Hubballi",
        address: "Shop No. 2, Swarna City Centre, Station Road, Railway Colony, Hubballi, Karnataka 580020",
        timings: "24 Hours",
        phone: "08362363633",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "chennamma_circle": [
      {
        name: "Wellness Forever Pharmacy - Chenamma Circle, Hubballi",
        address: "Ground floor, Vir Mansion, CTS No-1000 Ward no 3 Chenamma Circle, Traffic Island, Hubballi, Karnataka 580023",
        timings: "24 Hours",
        phone: "08657913764",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "deshpande_nagar": [
      {
        name: "Wellness Forever Pharmacy - Deshpande Nagar, Hubballi",
        address: "Shop No. 4, Deshpande Nagar, Near Police Quarters, Hubballi, Karnataka 580029",
        timings: "24 Hours",
        phone: "08362267890",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "amargol": [
      {
        name: "Wellness Forever Pharmacy - Amargol, Hubballi",
        address: "Shop No. 2, Amargol, Near Hubli-Dharwad Bypass, Hubballi, Karnataka 580024",
        timings: "24 Hours",
        phone: "09611360475",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "dajibanpeth": [
      {
        name: "Wellness Forever Pharmacy - Dajibanpeth, Hubballi",
        address: "Shop No. 7, Dajibanpeth, Near APMC Market, Hubballi, Karnataka 580026",
        timings: "24 Hours",
        phone: "08657002374",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "rn_shetty_road": [
      {
        name: "Wellness Forever Pharmacy - R.N. Shetty Road, Hubballi",
        address: "Shop No. 9, R.N. Shetty Road, Near Shankar Mutt, Hubballi, Karnataka 580020",
        timings: "24 Hours",
        phone: "08362363632",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "vijay_nagar": [
      {
        name: "Wellness Forever Pharmacy - Vijay Nagar, Hubballi",
        address: "Shop No. 5, Vijay Nagar, Near Water Tank, Hubballi, Karnataka 580027",
        timings: "24 Hours",
        phone: "08657002371",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "manjunath_nagar": [
      {
        name: "Wellness Forever Pharmacy - Manjunath Nagar, Hubballi",
        address: "Shop No. 3, Manjunath Nagar, Near Bus Stand, Hubballi, Karnataka 580028",
        timings: "24 Hours",
        phone: "09611360473",
        website: "https://www.wellnessforever.com/"
      }
    ],
    "vishweshwar_nagar": [
      {
        name: "Wellness Forever Pharmacy - Vishweshwar Nagar, Hubballi",
        address: "Shop No. 8, Vishweshwar Nagar, Near School, Hubballi, Karnataka 580029",
        timings: "24 Hours",
        phone: "08362267889",
        website: "https://www.wellnessforever.com/"
      }
    ]
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleVisitWebsite = (website) => {
    window.location.href = website;
  };

  return (
    <div className="medical">
      <header className="header">
        <h1>Medical Stores</h1>
      </header>
      <div className="content">
        <select className="area-select" onChange={handleAreaChange} value={selectedArea}>
          <option value="">Select Area</option>
          <option value="vidyanagar">Vidyanagar</option>
          <option value="keshwapur">Keshwapur</option>
          <option value="gokul_road">Gokul Road</option>
          <option value="railway_station_road">Railway Station Road</option>
          <option value="chennamma_circle">Chennamma Circle</option>
          <option value="deshpande_nagar">Deshpande Nagar</option>
          <option value="amargol">Amargol</option>
          <option value="dajibanpeth">Dajibanpeth</option>
          <option value="rn_shetty_road">Rn Shetty Road</option>
          <option value="vijay_nagar">Vijay Nagar</option>
          <option value="manjunath_nagar">Manjunath Nagar</option>
          <option value="vishweshwar_nagar">Vishweshwar Nagar</option>
        </select>
        
        {selectedArea && (
          <div className="store-list">
            {medicalData[selectedArea].map((store, index) => (
              <div className="store-card" key={index}>
                <h3>{store.name}</h3>
                <p className="address">{store.address}</p>
                <p className="timings">
                  <span className="label">Timings:</span> {store.timings}
                </p>
                <div className="store-buttons">
                  {store.phone && (
                    <button 
                      className="call-button"
                      onClick={() => window.location.href = `tel:${store.phone}`}
                      aria-label={`Call ${store.name} at ${store.phone}`}
                    >
                      📞 Call
                    </button>
                  )}
                  {store.website && (
                    <button 
                      className="website-button"
                      onClick={() => handleVisitWebsite(store.website)}
                      aria-label={`Visit ${store.name} website`}
                    >
                      🌐 Visit Website
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Medical;
