import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
    sayHello();
  }

  function sayHello() {
    console.log("Hello! This is a static message.");
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleSyntheticEvent(e) {
    alert("I was clicked");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome to the event handler demo!")}>Say Welcome</button>
      <br /><br />
      <button onClick={handleSyntheticEvent}>OnPress</button>
      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;