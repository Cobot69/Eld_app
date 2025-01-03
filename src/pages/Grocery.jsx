// Grocery.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './grocery.css';


const Grocery = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const navigate = useNavigate();

  const groceryData = {
    "vidyanagar": [
      {
        name: 'Ravi Supermart',
        address: 'Shirur Park Road, Vidyanagar, Hubballi, Karnataka 580021',
        timings: '9:30 AM - 9:00 PM',
        phone: '08362213999'
      },
      {
        name: 'More Supermarket - SIRUR PARK',
        address: 'CTS No 3552/59, 3552/61, 80 Feet Rd, Shirur Park, Vidya Nagar, Hubballi, Karnataka 580031',
        timings: '7:00 AM - 10:00 PM',
        phone: '08108138000',
        website: 'https://moreretail.in/'
      },
      {
        name: 'More Supermarket - Rajnagar Hubli',
        address: 'Diamond Crystal Apex, Vishweshwar Nagar Main Road, opposite KEB Office, Hastinapur Layout, Rajnagar, Vidya Nagar, Hubballi, Karnataka 580032',
        timings: '7:00 AM - 10:00 PM',
        phone: '08108138000',
        website: 'https://moreretail.in/'
      },
      {
        name: "Vishal Mega Mart",
        address: "SUSHRITHA HOSPITAL, HUBALI CENTRE MALL, NH-4, BESIDES, Vidya Nagar, HUBLI, Karnataka 580021",
        timings: "10:00 AM - 10:00 PM",
        phone: "07217888072",
        website: "https://stores.vishalmegamart.com/shopping-mart-hubli-dharwad-30596/home?utm_source=GMB"
      },
      {
        name: "Shree Venkateshwar Super Market",
        address: "947G+V3R, Vidya Nagar, Hubballi, Karnataka 580021",
        timings: "9:00 AM - 10:00 PM",
        phone: "09449804366"
      },
      {
        name: "Reliance SMART Point",
        address: "Main road, opposite SBI Apartment, Rajnagar, Vidya Nagar, Hubballi, Karnataka 580032",
        timings: "6:00 AM - 10:00 PM",
        phone: "18008910001",
        website: "https://relianceretail.com/"
      }
    ],
    "gokul road": [
      {
        name: "Reliance SMART Superstore",
        address: "Lower Ground Floor, Urban Oasis Mall Gokul Road, Airport Road, Hubballi, Karnataka 580020",
        timings: "10:00 AM - 10:00 PM",
        phone: "18008910001",
        website: "https://stores.reliancesmartbazaar.com/reliance-smart-superstore-shopping-outlet-airport-road-hubli-280366/Home?utm_source=locator&utm_medium=googleplaces"
      },
      {
        name: "More Supermarket - SILVER TOWN",
        address: "cross, 31, Gokul Rd, Silver Town, Karnataka 580030",
        timings: "7:00 AM - 10:00 PM",
        phone: "08108138000",
        website: "https://www.moreretail.in/store-address"
      },
      {
        name: "Ravi's Green Field Super Market",
        address: "74/3B Glabus Vishal Avenue, GokulRoad, near Denissons Hotel, Hubballi",
        timings: "9:00 AM - 8:30 PM",
        phone: "09035658533"
      },
      {
        name: "SAPTAGIRI SUPER MARKET",
        address: "Plot No 19, Avva Building, Shop No 1, Kotilingeshwar Nagar, Gokul Rd, opp. Hiregoudar Hospital, Hubballi, Karnataka 580030",
        timings: "9:00 AM - 9:00 PM",
        phone: "08867634199"
      }
    ],
    "keshwapur": [
      {
        name: "Reliance SMART Superstore",
        address: "No 438B, 58A, Kusugal Rd, Desai Park, Hubballi, Karnataka 580023",
        timings: "7:30 AM - 10:00 PM",
        phone: "18008910001",
        website: "https://stores.reliancesmartbazaar.com/reliance-smart-superstore-shopping-outlet-desai-park-hubli-280298/Home?utm_source=locator&utm_medium=googleplaces"
      },
      {
        name: "More Supermarket - Kusugal Road",
        address: "432B/87, Emkay Complex, Near Madhura Colony, Beside Akshay Colony, Kusugal Rd, Keshwapur, Karnataka 580023",
        timings: "8:00 AM - 9:00 PM",
        phone: "08108138000",
        website: "https://moreretail.in/"
      },
      {
        name: "Reliance Fresh",
        address: "Kalyani Classic, opp. Sbi Zonal Off, Keshwapur, Kusugal, Karnataka 580023",
        timings: "8:00 AM - 10:00 PM",
        phone: "18001027382",
        website: "http://storelocator.ril.com/Retail.aspx"
      },
      {
        name: "Vishal Mega Mart",
        address: "Kusugal Rd, beside Royal Enfield Showroom, Vasant Nagar, Hubballi, Karnataka 580023",
        timings: "8:00 AM - 10:00 PM",
        phone: "08178024063",
        website: "https://stores.vishalmegamart.com/shopping-mart-hubli-dharwad-30267/home?utm_source=GMB"
      }
    ],
    "amargol": [
      {
        name: "HalliMart",
        address: "Ashwamedha Park, Amargol, Hubballi, Karnataka 580025",
        timings: "9:00 AM - 9:30 PM",
        phone: "08792443067",
        website: "http://www.hallimart.in/"
      }
    ],
    "deshpande nagar": [
      {
        name: "Reliance Smart Point",
        address: "944Q+J5F, Vernekar Plaza, Cts No. 162/17A1,A2,A3,A4 & A5, Deshpande Nagar, Hubballi, Karnataka 580029",
        timings: "7:00 AM - 10:00 PM",
        phone: "08362353074",
        website: "http://storelocator.ril.com/Retail.aspx"
      },
      {
        name: "Star Localmart - Deshpande Nagar Hubli",
        address: "Kumbakonam plot, Gujarat Bhavan Rd, Bailappanavar Nagar, Deshpande Nagar, Hubballi, Karnataka 580029",
        timings: "8:00 AM - 10:00 PM",
        phone: "07758999555",
        website: "http://starlocalmart.com/"
      }
    ],
    "rn shetty road": [
      {
        name: "4Seasons Super Market",
        address: "RN Shetty Rd, Chaitanya Nagar, vimaleshwar Nagar, Hubballi, Karnataka 580030",
        timings: "9:00 AM - 10:00 PM",
        phone: "08867221811"
      }
    ],
    "bengeri": [
      {
        name: "Kisan Super Market",
        address: "Bengeri Extension, Kalyan Nagar, Hubballi, Karnataka 580023",
        timings: "9:00 AM - 9:00 PM",
        phone: "08050464616"
      },
      {
        name: "Star Localmart - SILVAR PARK HUBALI",
        address: "Opp:, Golden Park, GHANSHYAM ENCLAVE Bengrei Extension Silver Park, layout, Hubballi, Karnataka 580032",
        timings: "8:00 AM - 10:00 PM",
        website: "https://starlocalmart.com/"
      }
    ],
    "durgad bail": [
      {
        name: "MAHAJAN PROVISION STORES",
        address: "MAHAJAN PROVISION STORES, Radhakrishna Galli, Durgad Bail, New Hubli, Hubballi, Karnataka 580020",
        timings: "9:00 AM - 9:00 PM",
        phone: "08792711711"
      },
      {
        name: "Aroodha Mart",
        address: "84QX+J58, Settlement Main Road, Chetana Colony, Durgad Bail, New Hubli, Santiniketan, Hubballi, Karnataka 580020",
        timings: "7:00 AM - 10:00 PM",
        phone: "09663333703"
      },
      {
        name: "M/S. R. M. Mahajan",
        address: "6, Durgad Bail, New Hubli, Hubballi, Karnataka 588020",
        timings: "11:00 AM - 9:30 PM",
        phone: "09036921667"
      }
    ],
    "vikas nagar": [
      {
        name: "Fullbaskets The Grocery Store",
        address: "Kalburgi Building, Plot No 51, Siddhalingeshwar Colony, Vikas Nagar, Hubballi, Karnataka 580021",
        timings: "7:00 AM - 10:00 PM",
        phone: "09148005053"
      }
    ],
    "vijaya nagar": [
      {
        name: "Star Local Mart",
        address: "94CR+7JP, Devangpeth Main Rd, Vijay Nagar, kori, Dewangapeth, Hubballi, Karnataka 580023",
        timings: "8:00 AM - 10:00 PM",
        website: "https://www.starlocalmart.com/"
      }
    ]
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleVisitWebsite = (website) => {
    window.open(website, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="grocery">
      <header className="header">
        <h1>Grocery Stores</h1>
      </header>
      <div className="content">
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <select onChange={handleAreaChange} className="area-select">
          <option value="">Select Area</option>
          {Object.keys(groceryData).map((area) => (
            <option value={area} key={area}>
              {area.charAt(0).toUpperCase() + area.slice(1)}
            </option>
          ))}
        </select>
        <div className="store-list">
          {selectedArea &&
            groceryData[selectedArea].map((store, index) => (
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
                      onClick={() => handleCall(store.phone)}
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
      </div>
    </div>
  );
};

export default Grocery;