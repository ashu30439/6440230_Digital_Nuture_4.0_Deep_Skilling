// src/OnlineShopping.js
import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  render() {
    const items = [
      { itemname: "Smartphone", price: 15000 },
      { itemname: "Headphones", price: 2000 },
      { itemname: "Keyboard", price: 1000 },
      { itemname: "Monitor", price: 7000 },
      { itemname: "Laptop", price: 50000 }
    ];

    return (
      <div>
        <h1>Online Shopping Cart</h1>
        {items.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
