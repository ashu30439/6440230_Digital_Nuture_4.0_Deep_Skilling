import React from "react";

const offices = [
  {
    name: "Tech Park 1",
    rent: 55000,
    address: "123 Main St, Bangalore",
    image: "https://via.placeholder.com/300x200?text=Tech+Park+1"
  },
  {
    name: "Business Hub 2",
    rent: 75000,
    address: "456 MG Road, Mumbai",
    image: "https://via.placeholder.com/300x200?text=Business+Hub+2"
  },
  {
    name: "WorkZone 3",
    rent: 62000,
    address: "789 Hitech City, Hyderabad",
    image: "https://via.placeholder.com/300x200?text=WorkZone+3"
  }
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rentals</h1>
      {offices.map((office, index) => (
        <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <img src={office.image} alt={office.name} style={{ width: "300px", height: "200px" }} />
          <h2>{office.name}</h2>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>Rent: ₹{office.rent}</p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;