<!-- react.js -->
### React
React is an open-source JavaScript frontend library developed by Facebook. It follows a component-based approach to create complicated and interactive web and mobile user interfaces, particularly for single-page applications.

### Advantages of React:
- **Virtual DOM:** React utilizes a virtual DOM which offers fast rendering.
- **JSX:** JSX allows writing HTML structures in JavaScript.
- **Client & Server-side Rendering:** React supports both client-side and server-side rendering.
- **Integration:** It's easy to integrate React with other frameworks since it's primarily a view library.
- **Unit Testing:** React components are easy to test.

### Components:
Components in React encapsulate reusable pieces of functionality or UI. They promote a higher level of abstraction and modularity in building web applications.

### Fragments:
Fragments allow grouping a list of children without adding extra nodes to the DOM. They are not rendered to the DOM directly.

### Props:
Props are arguments passed into React components. They contain data coming down from a parent component to a child component.

### Key Prop:
The "key" prop helps React identify elements during the reconciliation process, making updates efficient.

### Lifecycle Methods:
Lifecycle methods allow hooking into different stages of a component's lifecycle.
### Mounting phase:
- `constructor()`: Initializes state and binds event handlers.
- `render()`: Renders the component's UI.
- `componentDidMount()`: Executes after mounting, used for data fetching and side effects.
### Updating phase:
- `shouldComponentUpdate()`: Determines if re-rendering is necessary.
- `componentDidUpdate()`: Executes after updates, useful for post-update side effects.
### Unmounting phase:
- `componentWillUnmount()`: Executes before unmounting, used for cleanup tasks.

### Controlled vs. Uncontrolled Components:
- **Controlled Component:** Receives its value through props and notifies changes through callbacks.
- **Uncontrolled Component:** Manages its own state internally and directly interacts with the DOM for data retrieval.

### Refs:
Refs are used to return a reference to the element. They are useful when direct access to the DOM element or an instance of a component is needed.

### React Hooks:
Introduced in React version 16.8, hooks allow using state and other React features without converting functional components to classes. They streamline code and reduce the likelihood of bugs.

### Basic Hooks:
- `useState`: Returns a stateful value and a function to update it.
- `useEffect`: Performs side effects in function components.
- `useContext`: Provides access to data via the value prop of the Context Provider in any child component.

#### Additional Hooks:
- `useReducer`: Manages state similar to Redux for smaller applications.
- `useCallback`: Memoizes callback functions to prevent recreation on every re-render.
- `useMemo`: Stores the results of expensive operations.
- `useRef`: Performs side effects in function components.
- `useImperativeHandle`: Allows modifying the ref instance exposed from parent components.
- `useLayoutEffect`: Runs synchronously immediately after React has performed all DOM mutations.
- `useDebugValue`: Displays additional information next to custom Hooks, with optional formatting.

### Context:
Context provides a way to pass data through the component tree without manual prop passing. It's designed for sharing global data among React components. However, it should be used sparingly due to its potential complexity and impact on component reuse.

### Data Passing Between Components:
- To pass data from parent to child, use props.
- To pass data from child to parent, use callbacks.
- For data sharing among siblings and elsewhere, utilize React's Context API or state management libraries like Redux, MobX, and Recoil for larger applications.

### Limitations of React:
One limitation of React is its focus on views, which may require additional libraries or patterns for managing application state and routing.

### Prop Drilling:
Prop Drilling occurs when data is passed from one component to deeply nested components, leading to unnecessarily complicated components and maintenance challenges. To avoid it, leverage React context or state management libraries.

### `dangerouslySetInnerHTML`:
This property allows rendering raw HTML in a component, replacing the use of innerHTML. However, its use should be limited due to potential security risks like cross-site scripting attacks.

### How to optimize React app performance:
* First, Use React.Suspense and React.Lazy for Lazy Loading Components. This will only load component when it is needed.
```javascript
import LazyComponent from './LazyComponent';
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```
* Second, Use React.memo for Component Memoization. React.memo is a higher order component that will render the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next 
```javascript
import React from 'react';
const MyComponent = React.memo(props =>  {
  /* render only if the props changed */
});
```
<!-- Note: If React.memo has a useState, useReducer or useContext Hook in its implementation, it will still re-render when state or context change. -->
The more often the component renders with the same props,  
the heavier and the more computationally expensive the output is,    
the more chances are that component needs to be wrapped in React.memo().   
* Third, Use React.Fragment to Avoid Adding Extra Nodes to the DOM React Fragments do not produce any extra elements in the DOM Fragment’s child components will be rendered without any wrapping DOM node. 
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
* Fourth, Use Reselect / Re-reselect in Redux to Avoid Frequent Re-render.
Reselect is a library for building memoized selectors that is commonly used for redux.

Advantages :
* Selectors can compute derived data, allowing Redux to store the minimal possible state.
* Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
* Selectors are composable. They can be used as input to other selectors.
* Re-reselect is a lightweight wrapper around Reselect to enhance selectors with deeper memoization and cache management.
Useful to :
* Retain selector's cache when sequentially called with one/few different arguments
* Join similar selectors into one
* Share selectors with props across multiple component instances
* Instantiate selectors on runtime
* Enhance reselect with custom caching strategies
* Last, Use Production Build
* Ensure that application is bundled for production before deploying.
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
### What is children prop?
It is a prop that allow us to pass components as data to other components, just like any other prop. Component tree between the component's opening tag and closing tag will be passed to that component as children prop.
Pros are immutable while the state is mutable. Both of them can update themselves easily.
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
