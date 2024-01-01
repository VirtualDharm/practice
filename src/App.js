import React from 'react'
import './App.css';
function App() {
  const [value,setValue] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input 
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)
        }/>
      {value&&<button>Submit</button>}
    </>
  );
}

export default App;
