import React, { useState } from "react";
import './pensionstyle.css';


const PensionCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [plans, setPlans] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const calculatePlans = () => {
    const investmentValue = parseFloat(investment);
    const timePeriodValue = parseInt(timePeriod);

    if (isNaN(investmentValue) || isNaN(timePeriodValue) || investmentValue <= 0 || timePeriodValue <= 0) {
      setErrorMessage("Please enter valid inputs for both fields."); // Set error message
      return;
    }

    setErrorMessage(""); // Clear error message if inputs are valid

    const planDetails = [
      { name: "TATA AIA", rate: 12.4, link: "https://example.com/tata" },
      { name: "MAX LIFE", rate: 10.9, link: "https://example.com/max" },
      { name: "PNB MetLIFE", rate: 8.2, link: "https://example.com/pnb" },
      { name: "HDFC Life", rate: 7.7, link: "https://example.com/hdfc" },
      { name: "SBI Life", rate: 12, link: "https://example.com/sbi" },
      { name: "ICICI predentials", rate: 12.7, link: "https://example.com/icici" },
      { name: "Canara HSBC", rate: 7.4, link: "https://example.com/canara" },
      { name: "ALLIANZ", rate: 15.5, link: "https://example.com/allianz" },
      { name: "KOTAK Life", rate: 14.5, link: "https://example.com/kotak" },
    ];

    const calculatedPlans = planDetails.map((plan) => {
      const totalInvestment = investmentValue * 12 * timePeriodValue;
      const monthlyRate = plan.rate / 12 / 100;
      const months = timePeriodValue * 12;

      const fvAtEndOfInvestments =
        investmentValue * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      const extraGrowthMonths = 5 * 12;
      const fvAfterExtraGrowth = fvAtEndOfInvestments * Math.pow(1 + monthlyRate, extraGrowthMonths);
      const monthlyPension = (fvAfterExtraGrowth / 240) * 0.8;
      const taxSavings = (totalInvestment * 0.3).toFixed(2);

      return {
        ...plan,
        totalInvestment: totalInvestment.toFixed(2),
        monthlyPension: monthlyPension.toFixed(2),
        taxSavings,
      };
    });

    setPlans(calculatedPlans);
  };

  return (
    <div className="pension-container">
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

      <section className="calculator">
        <h2>Personalized Pension Plan Calculator</h2>
        <form>
          <label>
            Monthly Investment (₹):
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="Enter amount"
            />
          </label>
          <label>
            Investment Period (Years):
            <input
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              placeholder="Enter years"
            />
          </label>
          <button type="button" onClick={calculatePlans}>Calculate Plans</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
      </section>

      <div className="plan-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <p>Annual Returns: <span className="highlight">{plan.rate}%</span></p>
              <p>Tax free</p>
            </div>
            <div>
              <ul>
                <li>Total Investment: <span className="highlight">₹{plan.totalInvestment}</span></li>
                <li>
                  Pension from {new Date().getFullYear() + parseInt(timePeriod) + 5}:{" "}
                  <span className="highlight">₹{plan.monthlyPension}/month</span>
                </li>
              </ul>
            </div>
            <div className="plan-footer">
              <span className="green-tag">Inbuilt Life Cover</span>
              <span className="red-tag">Save Tax Upto ₹{plan.taxSavings}</span>
              <a href={plan.link} target="_blank" rel="noopener noreferrer" className="explore-button">
                Get Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PensionCalculator;
