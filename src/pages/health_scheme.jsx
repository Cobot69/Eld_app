// health_scheme.jsx
import React, { useState } from "react";
import policies from "./health_scheme_data";
import "./health_scheme_style.css";

const PolicyCard = ({ policy }) => (
  <div className="policy-card">
    <h3>{policy.name}</h3>
    <p><strong>Coverage:</strong> ₹{policy.cover} Lakh</p>
    <p><strong>EMI:</strong> ₹{policy.emi}/month</p>
    <div dangerouslySetInnerHTML={{ __html: policy.html }} />
  </div>
);

const PolicyList = () => {
  const [filters, setFilters] = useState({ emi: "", cover: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredPolicies = policies.filter((policy) => {
    const emiMatch = !filters.emi || policy.emi <= parseInt(filters.emi, 10);
    const coverMatch = !filters.cover || policy.cover.toString().includes(filters.cover);
    return emiMatch && coverMatch;
  });

  return (
      <div className="policy-list">
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
        
      <h1>Insurance Policies</h1>
      <div className="filters">
        <input
          type="number"
          name="emi"
          placeholder="Max EMI"
          value={filters.emi}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="cover"
          placeholder="Coverage (in Lakh)"
          value={filters.cover}
          onChange={handleFilterChange}
        />
      </div>
      <div className="policies">
        {filteredPolicies.length > 0 ? (
          filteredPolicies.map((policy, index) => (
            <PolicyCard key={index} policy={policy} />
          ))
        ) : (
          <p>No policies match the filters.</p>
        )}
      </div>
    </div>
  );
};

export default PolicyList;
