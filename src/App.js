import React from 'react'
import './App.css';
function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      <p>{value}</p>
    </>
  );
}

export default App;
