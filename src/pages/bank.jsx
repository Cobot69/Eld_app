import React, { useState } from 'react';
import './bank_style.css';


const bankData = [
  { name: "Post Office", roi: { 1: 6.9, 2: 7, 3: 7, 4: 7, 5: 7.5 } },
  { name: "SBI", roi: { 1: 7.3, 2: 7.25, 3: 7, 4: 7, 5: 6.5 } },
  { name: "Punjab National Bank", roi: { 1: 7.6, 2: 7.8, 3: 7.3, 4: 7.3, 5: 7.3 } },
  { name: "HDFC Bank", roi: { 1: 7.1, 2: 7.65, 3: 7.5, 4: 7.5, 5: 7.75 } },
  { name: "Axis Bank", roi: { 1: 7.6, 2: 7.6, 3: 7.6, 4: 7.6, 5: 7.75 } },
  { name: "ICICI Bank", roi: { 1: 7.65, 2: 7.5, 3: 7.5, 4: 7.5, 5: 7.5 } },
  { name: "Bank of Baroda", roi: { 1: 7.35, 2: 7.75, 3: 7.15, 4: 7.15, 5: 7.5 } },
  { name: "Canara Bank", roi: { 1: 7.35, 2: 7.35, 3: 7.3, 4: 7.3, 5: 7.2 } },
  { name: "Union Bank of India", roi: { 1: 7.25, 2: 7, 3: 7, 4: 7, 5: 7 } },
  { name: "Central Bank of India", roi: { 1: 7.25, 2: 7.5, 3: 7, 4: 7, 5: 6.75 } },
  { name: "Yes Bank", roi: { 1: 6.85, 2: 8.25, 3: 8, 4: 8, 5: 7.75 } },
  { name: "Bandhan Bank", roi: { 1: 7.75, 2: 7.75, 3: 7.75, 4: 7.75, 5: 6.6 } },
  { name: "IDFC Bank", roi: { 1: 8, 2: 7.75, 3: 7.5, 4: 7.5, 5: 7.5 } },
  { name: "Indian Bank", roi: { 1: 6.8, 2: 7.2, 3: 6.75, 4: 6.75, 5: 6.6 } },
  { name: "IndusInd Bank", roi: { 1: 8.25, 2: 8, 3: 8, 4: 8, 5: 8 } },
  { name: "IDBI Bank", roi: { 1: 7.3, 2: 7, 3: 7, 4: 7, 5: 6.75 } },
  { name: "Kotak Mahindra Bank", roi: { 1: 7.7, 2: 7.65, 3: 7.6, 4: 7.6, 5: 6.7 } },
];

const BankCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const calculateReturns = () => {
    const parsedAmount = parseFloat(amount);
    const parsedTenure = parseFloat(tenure);

    if (!parsedAmount || !parsedTenure) {
      setErrorMessage('Please enter valid amount and tenure.');
      return;
    }

    setErrorMessage(''); // Clear any previous error message

    const calculatedResults = bankData.map((bank) => {
      const rate = bank.roi[Math.min(parsedTenure, 5)] / 100;
      const maturityAmount = parsedAmount + parsedAmount * rate * parsedTenure;
      const totalProfit = maturityAmount - parsedAmount;
      const monthlyReturn = (parsedAmount * rate) / 12;

      return {
        name: bank.name,
        invested: parsedAmount.toFixed(2),
        rate: bank.roi[Math.min(parsedTenure, 5)],
        profit: totalProfit.toFixed(2),
        monthly: monthlyReturn.toFixed(2),
        tenure: parsedTenure,
      };
    });

    setResults(calculatedResults);
  };

  return (
    <div className="container">
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

      <div className="calculator">
        <h2>Calculate Monthly Returns</h2>
        <label htmlFor="amount">Enter Amount (₹):</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter the deposit amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="tenure">Enter Tenure (in years):</label>
        <input
          type="number"
          id="tenure"
          placeholder="Enter tenure in years"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={calculateReturns}>Calculate</button>
      </div>

      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="card">
            <h3>{result.name}</h3>
            <p><strong>Amount Invested:</strong> ₹{result.invested}</p>
            <p><strong>Rate of Interest:</strong> {result.rate}%</p>
            <p><strong>Total Profit Earned:</strong> ₹{result.profit}</p>
            <p><strong>Every Month Return:</strong> ₹{result.monthly}</p>
            <p><strong>Tenure:</strong> {result.tenure} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankCalculator;
