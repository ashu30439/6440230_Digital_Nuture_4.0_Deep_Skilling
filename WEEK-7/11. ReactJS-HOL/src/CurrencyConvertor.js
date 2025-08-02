import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const euroRate = 0.011; // Example conversion rate
    const result = parseFloat(rupees) * euroRate;
    setEuro(result.toFixed(2));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Currency Convertor (INR to EUR)</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>Convert</button>
      {euro !== null && <p>{rupees} INR = {euro} EUR</p>}
    </div>
  );
}

export default CurrencyConvertor;