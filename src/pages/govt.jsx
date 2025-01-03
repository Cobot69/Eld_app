import React from "react";
import "./govt.css";

const Govt = () => {
  return (
      <div>
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

      <section>
        <h2>Available Pension Schemes</h2>
        <div className="plan-container">
          {/* Plan 1 */}
          <div className="info-box">
            <h3>Indira Gandhi National Old Age Pension Scheme (IGNOAPS)</h3>
            <p>
              The Indira Gandhi National Old Age Pension Scheme (IGNOAPS) is part of
              the National Social Assistance Programme (NSAP) and aims to offer
              financial support to elderly people who are below the poverty line
              (BPL). This pension provides a monthly stipend to help them meet their
              basic needs, improving their quality of life in old age.
            </p>
            <h3>Requirements</h3>
            <ul>
              <li>
                Age Requirement: 60 years and above. Pension increases with age:
                <ul>
                  <li>60-79 years: ₹200/month.</li>
                  <li>80+ years: ₹500/month.</li>
                </ul>
              </li>
              <li>BPL Status: Must belong to the Below Poverty Line category.</li>
              <li>Residency: Must be a permanent resident of India.</li>
              <li>Bank Account: Required for pension disbursement.</li>
            </ul>
            <h3>Eligibility</h3>
            <ul>
              <li>Age: 60+ years.</li>
              <li>BPL Status: Verified with income/assets assessment.</li>
              <li>Citizenship: Must be an Indian citizen.</li>
              <li>Documentation: Proof of age, residence, and BPL status required.</li>
            </ul>
            <button
              className="apply-button"
              onClick={() => window.location.href = "https://nsap.nic.in/"}
            >
              Apply Here
            </button>
          </div>

          {/* Plan 2 */}
          <div className="info-box">
            <h3>Pradhan Mantri Vaya Vandana Yojana (PMVVY)</h3>
            <p>
              The Pradhan Mantri Vaya Vandana Yojana (PMVVY) is a pension scheme for
              senior citizens aged 60 years and above, providing them with a steady
              income during retirement. It offers guaranteed returns at an interest
              rate of 7.75% per annum, paid monthly, quarterly, or yearly. The scheme
              ensures financial security by offering a reliable source of income and
              allows for a loan against the purchase price. In case of premature exit
              due to critical illness, it allows for a withdrawal, and the entire investment
              is returned to the nominee upon death. PMVVY helps senior citizens maintain
              financial independence in their later years.
            </p>
            <h3>Requirements</h3>
            <ul>
              <li>
                Age Requirement: 60 years and above.
                <ul>
                  <li>Minimum Investment: ₹1,56,658 for monthly pension.</li>
                  <li>Maximum Investment: ₹14,88,118 for ₹1,000 monthly pension.</li>
                </ul>
              </li>
              <li>Investment Limit: Maximum investment of ₹15 lakh per senior citizen.</li>
              <li>Payment Mode: Premium to be paid as a lump sum for the entire policy term.</li>
              <li>
                Documents Required:
                <ul>
                  <li>Identity Proof (Aadhar card, Passport, etc.)</li>
                  <li>Age Proof (Birth certificate, Aadhar card, etc.)</li>
                  <li>Bank Details (for pension disbursement)</li>
                </ul>
              </li>
              <li>Nominee: A nominee must be designated for the return of the purchase price after death.</li>
            </ul>
            <h3>Eligibility</h3>
            <ul>
              <li>Age: 60+ years.</li>
              <li>Citizenship: Must be an Indian citizen.</li>
              <li>Investment: Must meet the minimum and maximum investment requirements.</li>
              <li>Documentation: Proof of age, identity, and bank details required.</li>
            </ul>
            <button
              className="apply-button"
              onClick={() => window.location.href = "https://licindia.in/"}
            >
              Apply Here
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Govt;
