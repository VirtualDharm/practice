import logo from './logo.svg';
import './App.css';
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const UserItems = users.map((x) => <li key={x.id}>{x.name}</li>)
function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>{UserItems}</ul>
    </>
  )
}

export default App;
