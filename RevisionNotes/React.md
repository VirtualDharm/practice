<!-- react.js -->

React.JS was first used in 2011 for Facebook's Newsfeed feature. Facebook Software Engineer, Jordan Walke, created it.

### React
React is an open-source JavaScript frontend library developed by Facebook. It follows a component-based approach to create complicated and interactive web and mobile user interfaces, particularly for single-page applications.

### Advantages of React:
- **Virtual DOM:** React utilizes a virtual DOM which offers fast rendering.
- **JSX:** JSX allows writing HTML structures in JavaScript.
const myElement = ```<h1>I Love JSX!</h1>```;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
- **Client & Server-side Rendering:** React supports both rendering.
- **Integration:** It's easy to integrate React with other frameworks since it's primarily a view library.
- **Unit Testing:** React components are easy to test.

import React from "react";   //react-code
import ReactDOM from "react-dom/client";
function Hello(props) {
  return ```<h1>Hello World!</h1>```;
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);

// After 18 version
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

document.write("<p>Sum: " + add + "</p>"); in <script> tag


### Components:
Components in React encapsulate reusable pieces of functionality or UI. They promote a higher level of abstraction and modularity in building web applications.

### State:
The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

### Pure Components:
React pure components are the components that do not re-render when the value of props and state has been updated with the same values. Since these components do not cause re-rendering.

### Controlled vs. Uncontrolled Components:
- **Controlled Component:** Receives its value through props and notifies changes through callbacks.
- **Uncontrolled Component:** Manages its own state internally and directly interacts with the DOM for data retrieval.

### Fragments:
Fragments allow grouping a list of children without adding extra nodes to the DOM. They are not rendered to the DOM directly.

### Props:
Props are arguments passed into React components. They contain data coming down from a parent component to a child component.
### Key Prop:
The "key" prop helps React identify elements during the reconciliation process, making updates efficient.

### Lifecycle of Components:
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases: Mounting, Updating, and Unmounting.

### Mounting phase:
- `constructor()`: Initializes state.
- `getDerivedStateFromProps()`: Initializes state & gets prop for methods.
- `render()`: It is mandatory & actually puts HTML to the DOM.
- `componentDidMount()`: Executes after mounting, used for data fetching and side effects.

### Updating phase:
- `getDerivedStateFromProps()`: Still the natural place to set the state object.
- `shouldComponentUpdate()`: return True/False that specifies whether React should continue with the re-rendering or not.
- `componentDidUpdate()`: Executes after updates, useful for post-update side effects.
- `render()`: Same
- `getSnapshotBeforeUpdate()`: You have access to the props and state before the update
- `componentDidUpdate()`: Executes after updates, useful for post-update side effects.

### Unmounting phase:
- `componentWillUnmount()`: Executes before unmounting, used for cleanup tasks.

```javascript
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { favoritecolor: "red" };
      console.log("Constructor: Initializing state.");
    }
    static getDerivedStateFromProps(props, state) {
      console.log("getDerivedStateFromProps: Syncing props with state.");
      return null; // No changes to state in this example.
    }
    componentDidMount() {
      console.log("componentDidMount: Component mounted to the DOM.");
      setTimeout(() => {
        this.setState({ favoritecolor: "yellow" });
      }, 1000);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate: Checking if component should re-render.");
      return true; // Allow the update
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate: Capturing state before update.");
      return prevState.favoritecolor; // Snapshot of the previous favorite color.
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("componentDidUpdate: Component re-rendered.");
      document.getElementById("mydiv").innerHTML =
        `Before update, the favorite color was ${snapshot}. ` +
        `The updated favorite is ${this.state.favoritecolor}.`;
    }
    componentWillUnmount() {
      console.log("componentWillUnmount: Cleaning up before component unmounts.");
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      console.log("Render: Rendering component.");
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="mydiv"></div>
        </div>
      );
    }
  }
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showHeader: true };
    }
    toggleHeader = () => {
      this.setState((prevState) => ({ showHeader: !prevState.showHeader }));
    };
    render() {
      return (
        <div>
          {this.state.showHeader && <Header />}
          <button onClick={this.toggleHeader}>
            {this.state.showHeader ? "Unmount Header" : "Mount Header"}
          </button>
        </div>
      );
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
```
//in function based useEffect does all of that

<>{ isGoal ? <MadeGoal/> : <MissedGoal/> }</>
in list remember to give keys


### React Router:
to add page routing.
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<NoPage />} />

### React css:
{{}}, camelCased instead of background-color
<h1 style={{backgroundColor: "lightblue"}}>Hello!</h1>
The CSS inside a module is available only for the component that imported it: my-style.module.css
Sass is a CSS pre-processor. Sass files are executed on the server and sends CSS to the browser. can use variables and other Sass functions.

### React Hooks:
Introduced in React version 16.8, hooks allow using state and other React features without converting functional components to classes. They streamline code and reduce the likelihood of bugs.

3 rules:
Hooks can only be called inside React function components.  
Hooks can only be called at the top level of a component.   
Hooks cannot be conditional.    

### Basic Hooks:
- `useState`: Returns a stateful value and a function to update it.
    setCar(previousState => { //to save previousState of object otherwise whole object would be destroyed.
          return { ...previousState, color: "blue" }
        })

- `useEffect`: Performs side effects in function components. Fetching data, directly updating the DOM, and timers. useEffect(<function>, <dependency>)
    return () => clearTimeout(timer) //remember to clear memory before leaving useEffect.

- `useContext`: The component at the top and bottom of the stack need access to the state. To do this without Context, we will need to pass the state as "props" through each deeply nested components. This is called "prop drilling".

  Component2({ user }){ <Component3 user={user} /> }

  import { createContext, useContext } from "react";
  const UserContext = createContext();
  <UserContext.Provider value={user}>
  </UserContext.Provider>
  const user = useContext(UserContext);


#### Additional Hooks:
- `useRef`: Performs side effects in function components.
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
- `useReducer`: Manages state similar to Redux for smaller applications. //skibdi
  State Reducers with useReducer
  For complex state logic, useReducer can be more efficient.
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 };
      case 'decrement': return { count: state.count - 1 };
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);


- `useMemo`: returns a memoized value & `useCallback`: returns a memoized function to prevent recreation on every re-render. We prefer useCallback as Every time a component re-renders, its functions get recreated it is called referential equality.

- `custom hooks`:
  function useSomeData(url) { //let's suppose fetch some data
    return data;
  }
  const data = useSomeData('/api/data');
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;

  extra 
  '''
- `useImperativeHandle`: Allows modifying the ref instance exposed from parent components.
- `useLayoutEffect`: Runs synchronously immediately after React has performed all DOM mutations.
- `useDebugValue`: Displays additional information next to custom Hooks, with optional formatting.
- `useHistory or useLocation` : Manages navigation and access to route history and location.
  '''


### Data Passing Between Components:
- To pass data from parent to child, use props.
- To pass data from child to parent, use callbacks.
- For data sharing among siblings and elsewhere, utilize React's Context API or state management libraries like Redux, MobX, and Recoil for larger applications.

### Limitations of React:
One limitation of React is its focus on views, which may require additional libraries or patterns for managing application state and routing.

### `dangerouslySetInnerHTML`:
This property allows rendering raw HTML in a component, replacing the use of innerHTML. However, its use should be limited due to potential security risks like cross-site scripting attacks.

### How to optimize React app performance:
1. Use **React.Suspense** and React.Lazy for Lazy Loading Components. This will only load component when it is needed.
```javascript
import LazyComponent from './LazyComponent';
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```
2. Use **React.memo** for Component Memoization. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering a component. 
```javascript
import React from 'react';
const MyComponent = React.memo(props =>  {
  /* render only if the props changed */
});
import { memo } from "react";
export default memo(Todos);
const calculation = expensiveCalculation(count);
const calculation = useMemo(() => expensiveCalculation(count), [count]);
```  
3. Use **React.Fragment** to Avoid Adding Extra Nodes to the DOM React Fragments do not produce any extra elements in the DOM Fragment’s child components will be rendered without any wrapping DOM node. 
```javascript
function App() {
  return (
    <React.Fragment> or <>
      <h1>Best App</h1>
      <p>Easy as pie!</p>
    </React.Fragment> or </>
  );
}
```
4. Utilize Reselect/Re-reselect in Redux to Reduce Re-renders:
* Enhances memoization for optimal performance.
* Shares and joins selectors.
* Supports runtime instantiation and custom caching.
* Utilize Production Build for deployment.

### Higher-Order Components :
It is an advanced technique in React for reusing component logic. It is a function that takes a component and returns a new component.
```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer.

HOC can be used for many use cases:
* Conditionally rendering components.
* Providing components with specific styles.
* Give other components any props.
* Showing a loader while a component waits for data.

- To pass data from parent to child, use props & for vice-versa use callbacks.

### What is children prop?
**Pros are immutable while the state is mutable**. Both of them can update themselves easily.
```javascript
const MyComponent = ({title, children}) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
import { MyComponent } from './MyComponent';
const App = () => {
  return (
    <MyComponent title = 'Simple React App'>
      <h2>Very Kewl Feature</h2>
    </MyComponent>
  );
}
```
### How to pass a parameter to an event handler or callback?
You can use an arrow function to wrap around an event handler and pass parameters:
```javascript
<button onClick={() => this.handleClick(id)} /> 
You can also pass arguments to a function which is defined as arrow function
const handleClick = (id) => () => {
    console.log(`The id is ${id}`)
}; 
<button onClick={this.handleClick(id)} />
```
### Why do we need to pass a function to setState()?
setState() is an asynchronous operation. React batches state changes for performance reasons. This means state may not change immediately after setState() is called.
```javascript
We should not rely on the current state when calling setState() since we can't be sure what that state will be.
// Wrong 
this.setState({
  counter: this.state.counter + 1
})
The solution is to pass a function to setState(), with the previous state as an argument.
// Correct 
this.setState((prevState) => ({
  counter: prevState.counter + 1
})) 
```
### Top 50 React questions: 

### Redux:
Redux is a state management library for JavaScript applications, commonly used with React. It provides a predictable state container and helps manage application state in a more organized way.

### Key Concepts:
- **Store:** Redux stores the entire state of your application in a single JavaScript object called the store. This makes it easy to access and manage the state from anywhere in your application.
- **Actions:** Actions are plain JavaScript objects that represent "what happened" in your application. They describe the intention to change the state and are the only way to send data to the Redux store.
- **Reducers:** Reducers are pure functions that specify how the application's state changes in response to actions sent to the store. They take the previous state and an action as arguments, and return the next state.
- **Dispatch:** Dispatch is a method provided by the store that allows you to send actions to the Redux store. When an action is dispatched, it triggers the corresponding reducer to update the state.

### Workflow:
- **Action Creation:** You define action creators, which are functions that create and return action objects. These action objects typically have a type field to indicate the type of action and optionally a payload field to carry data.
- **Dispatching Actions:** When some event occurs in your application (like a button click), you dispatch an action using the dispatch method provided by the Redux store.
- **Reducer Handling:** Reducers specify how the state should change in response to dispatched actions. They take the current state and an action as arguments, and return the next state based on the action type.
- **Updating State:** The Redux store applies the reducer functions to the current state and the dispatched action, producing a new state. This new state is then stored in the Redux store, replacing the previous state.

### Benefits:
- **Predictability:** Redux makes state changes predictable and transparent by following strict principles and patterns.
- **Debugging:** It provides powerful debugging tools, such as Redux DevTools, which allow you to track state changes over time.
- **Testability:** Redux promotes writing testable code by separating state logic from presentation components.

### Redux Thunk:
Redux Thunk is a middleware that enables handling asynchronous actions in Redux. It allows action creators to return functions instead of plain objects, useful for tasks like data fetching from APIs.

### Key Points:
- **What is Redux Thunk?** Redux Thunk helps handle asynchronous actions in Redux. It lets action creators return functions instead of plain action objects.
- **Why use Redux Thunk?** It's handy for tasks like fetching data from an API, where you need to wait for an async operation to complete before dispatching an action.
- **How does it work?** Instead of returning an action object directly, your action creator returns a function. This function receives dispatch and getState as arguments, allowing you to dispatch actions conditionally or after async operations.

```javascript
// Action creator using Redux Thunk
export const fetchData = () => {
  return (dispatch, getState) => {
    dispatch(fetchDataRequest()); // Dispatching an action to indicate start of data fetching
    // Async operation (e.g., fetching data from an API)
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchDataSuccess(data)); // Dispatching success action with fetched data
      })
      .catch(error => {
        dispatch(fetchDataFailure(error)); // Dispatching failure action with error
      });
  };
};
```
In this example, fetchData returns a function that receives dispatch and getState. Inside this function, you can dispatch actions based on async operation results, like fetching data from an API.
To use Redux Thunk, you need to apply it as middleware when creating the Redux store.
const { avatar, username } = this.props


react tricks:
{isLoading && <Spinner />}

const sortedData = useMemo(() => data.sort(), [data]); //memoize

Debouncing Inputs with useEffect
const [value, setValue] = useState('');
const [debouncedValue, setDebouncedValue] = useState('');
useEffect(() => {
  const handler = setTimeout(() => setDebouncedValue(value), 500);
  return () => clearTimeout(handler);
}, [value]);
<input value={value} onChange={(e) => setValue(e.target.value)} />

Lazy loading:
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}

To access previous state values, use useRef.
const [count, setCount] = useState(0);
const prevCount = useRef(count);
useEffect(() => {
  prevCount.current = count;
}, [count]);
console.log(`Previous: ${prevCount.current}, Current: ${count}`);

Avoid Re-renders by Passing Functions to useCallback
If a function doesn’t need to change, memoize it with useCallback.
const increment = useCallback(() => setCount(count + 1), [count]);

useLayoutEffect run effects after DOM updates but before paint.
useLayoutEffect(() => {
  console.log("Layout effect");
}, []);

Defining functions inline causes re-renders. Instead, define them outside.
const handleClick = () => console.log("Clicked");
<button onClick={handleClick}>Click Me</button>