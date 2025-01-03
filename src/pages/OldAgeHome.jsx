import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OldAgeHome = () => {
  const oldAgeHomes = [
    {
      id: 1,
      name: "Sandhya Kirana Old Age Home",
      location: "Keshwapur, Hubballi, Karnataka",
      type: "Paid",
      category: "Private",
      photo: "https://threebestrated.in/images/SandhyaKiranaOldAgeHome-HubballiDharwad-KA.jpeg",
      facilities: ["Premium Accommodation", "Routine Health Checkups", "Wholesome Nutritious Meals"],
      phone: "9448122733",
    },
    {
      id: 2,
      name: "Shine Home",
      location: "Tarihal, Hubballi, Karnataka",
      type: "Free",
      category: "Government",
      photo: "https://i.postimg.cc/kgckZKcd/shine1.jpg",
      facilities: ["24/7 nursing care", "Regular Checkups", "Indoor Games"],
      phone: "9663056331",
    },
    {
      id: 3,
      name: "Jeevan Sandhya Old Age Home",
      location: "NH63, Kadankoppa, Chalamatti, Karnataka 581204",
      type: "Paid",
      category: "Private",
      photo: "https://lh5.googleusercontent.com/p/AF1QipNtuW4uOVulBJmrJUJr8JToi17KYxO7Cov_SjwP=w203-h134-k-no",
      facilities: ["Weekly 2 time visit doctor ( free of Checkup)", "Nutritious meals", "Yearly trips"],
      phone: "9164753102",
    },
    {
      id: 4,
      name: "Anand Ashram Old Age Home Dharwad",
      location: "Salakinakoppa, Dharwad - Haliyal Rd, Dharwad, Karnataka 580118",
      type: "Free",
      category: "Government",
      photo: "https://lh5.googleusercontent.com/p/AF1QipOhfswRnlqMEOHepDa4kCAQN6Jme3aKlwtMGql6=w203-h152-k-no",
      facilities: ["Nutritious meals", "Group therapy", "Transportation"],
      phone: "9945339169",
    },
    {
      id: 5,
      name: "Maitri Vrudhashrama",
      location: "Shivanand Nagar, Hubballi, Karnataka 580025",
      type: "Free",
      category: "Government",
      photo: "https://lh5.googleusercontent.com/p/AF1QipNzxmEsyZ8aLeVO45gG-SAbKJWB-zlUMYf36Ghi=w152-h86-k-no",
      facilities: ["Complete residential facilities", "Nursing care", "Education and vocational training", "Basic amenities and medical assistance"],
      phone: "7795891828",
    },
    {
      id: 6,
      name: "Basavashri Old Age Home",
      location: "2nd Cross, Omkar Building, Bus Stand, Gokul Rd, near Niketan Heritage, Dollars Hights, behind New KSRTC, Dollars Colony, Chaitanya Nagar, Rajendra Nagar, Hubballi, Karnataka 580030",
      type: "Paid",
      category: "Private",
      photo: "https://i.postimg.cc/76Qt4NCp/basavashri1.png",
      facilities: ["Affordable and comfortable stay", "Day care", "Medical check-ups", "Recreational activities"],
      phone: "9726900047",
    },
    {
      id: 7,
      name: "SOCIETY OF ST.VINCENT DE PAUL HOME OF THE AGED",
      location: "946V+HX8, Bengeri Extension, Keshwapur, Hubballi, Karnataka 5800231",
      type: "Paid",
      category: "Private",
      photo: "https://i.postimg.cc/W4yfLnqx/vincet1.jpg",
      facilities: ["Compassionate and loving staff", "Nutritious meals", "Health and wellness programs", "Recreational activities"],
      phone: "9448300400",
    },
  ];

  const [filteredHomes, setFilteredHomes] = useState(oldAgeHomes);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSort, setLocationSort] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filtering function based on search term, location, type, and category
  const handleFilter = () => {
    let filtered = oldAgeHomes;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(home => home.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Location sorting
    if (locationSort !== "all") {
      filtered = filtered.filter(home => home.location.toLowerCase().includes(locationSort.toLowerCase()));
    }

    // Type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter(home => home.type.toLowerCase() === typeFilter.toLowerCase());
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(home => home.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    setFilteredHomes(filtered);
  };

  // Trigger the filter on every change
  React.useEffect(() => {
    handleFilter();
  }, [searchTerm, locationSort, typeFilter, categoryFilter]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#7300d7', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Hubli-Dharwad Old Age Homes</h1>
      </header>

      <main style={{ padding: '20px' }}>
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search by name..."
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filters */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
          {/* Location Sort Dropdown */}
          <select
            value={locationSort}
            onChange={(e) => setLocationSort(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px' }}
          >
            <option value="all">Sort by Location</option>
            <option value="keshwapur">keshwapur</option>
            <option value="Shivanand Nagar">Shivanand Nagar</option>
            <option value="Salakinakoppa">Salakinakoppa</option>
            <option value="kadankoppa">Kadankoppa</option>
            <option value="chalamatti">Chalamatti</option>
            <option value="tarihal">Tarihal</option>
            <option value="Gokul Rd">Gokul Rd</option>
          </select>

          {/* Type Dropdown */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px' }}
          >
            <option value="all">Type</option>
            <option value="paid">Paid</option>
            <option value="free">Free</option>
          </select>

          {/* Category Dropdown */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px' }}
          >
            <option value="all">Category</option>
            <option value="government">Government</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredHomes.map((home) => (
            <div
              key={home.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '5px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                background: 'white',
                transition: 'transform 0.2s',
              }}
            >
              <img
                src={home.photo}
                alt={home.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px', color: '#333' }}>
                <h3 style={{ color: '#111' }}>{home.name}</h3>
                <p><strong>Location:</strong> {home.location}</p>
                <p><strong>Type:</strong> {home.type}</p>
                <p><strong>Category:</strong> {home.category}</p>
                <p><strong>Facilities:</strong> {home.facilities.join(', ')}</p>
                <Link
                  to={`/details/${home.id}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    marginRight: '10px',
                    padding: '10px',
                    color: 'white',
                    backgroundColor: '#3498db',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                  View Details
                </Link>
                <a
                  href={`tel:${home.phone}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: '10px',
                    color: 'white',
                    backgroundColor: '#27ae60',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OldAgeHome;
