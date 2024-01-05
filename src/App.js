import React from 'react'

function App() {
  const [count,setCount] = React.useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}
export default App;