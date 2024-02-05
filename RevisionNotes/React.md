# React :
* open-source, JavaScript frontend library, facebook, component based approach to create complicated, interactive web and mobile user interface, single-page applications.
# Advantages of React :
* Virtual DOM which is blazing fast, JSX(React.createElement()), client & server side rendering, Simple to integrate with other frameworks since it is only a view library, easy to write unit tests.
# DOM: Document Object Model: Update on virtual DOM is cheaper and faster than updating the actual DOM.
# Components encapsulate reusable pieces of functionality or UI which are typically composed of elements but provide a higher level of abstraction and modularity in building web applications.
# Fragments :
they let you group a list of children without adding extra nodes to the DOM because fragments are not rendered to the DOM.
# Props are arguments passed into React components. It contains data coming down from a parent component to a child component.
# "key" prop :
Keys help react identify which elements were added, changed or updated, and removed by using diffing algo using index
# Lifecycle methods :
they are special methods that allow you to hook into different stages of a component's lifecycle:
# Mounting phase:
* constructor(): Initializes state and binds event handlers.
* render(): Renders the component's UI.
* componentDidMount(): Executes after the component is mounted in the DOM. Used for data fetching and other side effects.
# Updating phase:
* shouldComponentUpdate(): Determines if the component should re-render.
* componentDidUpdate(): Executes after the component is updated in the DOM. Useful for post-update side effects.
# Unmounting phase:
* componentWillUnmount(): Executes just before the component is unmounted. Used for cleanup tasks like removing event listeners.
These methods help manage component behavior throughout its lifecycle, facilitating tasks such as initialization, rendering, updating, and cleanup.
# Controlled Component : 
Receives its value through props and notifies changes through callbacks.
# Uncontrolled Component : 
Manages its own state internally and directly interacts with the DOM for data retrieval.
# use of refs : 
The ref is used to return a reference to the element. They can be useful when you need direct access to the DOM element or an instance of a component. 
# React Hooks : 
they are a new addition in React version 16.8. They let you use state and other React features without converting functional components to a class.

Hooks does the same job with less code and with less code means less chances of producing bugs.

# Basic Hooks
* useState : returns a stateful value, and a function to update it.
* useEffect : lets us perform side effects in function components.
* useContext : gives a simple function to access the data via value prop of the Context Provider in any child component
# Additional Hooks
* useReducer : state management like redux for managing state in smaller applications rather than having to reach for a third-party state management library
* useCallback : memoizes callback functions, so they not recreated on every re-render.
* useMemo : stores the results of expensive operations
* useRef : lets us perform side effects in function components
* useImperativeHandle : Used together with forwardRef which allows you to modify the ref instance that is exposed from parent components
* useLayoutEffect : this runs synchronously immediately after React has performed all DOM mutations
* useDebugValue : allows you to display additional, helpful information next to your custom Hooks, with optional formatting.
# Context :
it provides a way to pass data through component tree without having to pass props down manually at every level.
It is designed to share data that can be considered global for a tree of React components.￼
<!-- Note: Apply it sparingly because it makes component reuse more difficult. Consider component composition as it is often a simpler solution than context. -->
# How to pass data between components?
* To pass data from parent to child, use props
* To pass data from child to parent, use callbacks
* To pass data among siblings AND anywhere else
    * use React’s Context API also
    * use state management libraries for mid - big sized applications that are stateful. Example: Redux, MobX, and Recoil
# limitations of React : Views
# What is prop drilling and how can you avoid it?
Prop Drilling is the process by which data is passed from one component to deeply nested components. This becomes a problem as other components will contain data that they don’t need.
Also, It will make the components hard to maintain.
A common approach to avoid prop drilling is to use React context and state management libraries.
* Components that should not otherwise be aware of the data become unnecessarily complicated
* Harder to maintain.
# What is the use of dangerouslySetInnerHTML?
This property is React’s replacement for using innerHTML in the browser. It will render raw HTML in a component.
One should limit its use because it can expose users to potential cross-site scripting attacks.
# Name a few techniques to optimize React app performance.
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
the heavier and the more computationally expensive the output is, the more chances are that component needs to be wrapped in React.memo().
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
# Higher-Order Components :
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
# What is children prop?
It is a prop that allow us to pass components as data to other components, just like any other prop. Component tree between the component's opening tag and closing tag will be passed to that component as children prop.
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
# How to pass a parameter to an event handler or callback?
You can use an arrow function to wrap around an event handler and pass parameters:
```javascript
<button onClick={() => this.handleClick(id)} /> 
You can also pass arguments to a function which is defined as arrow function
const handleClick = (id) => () => {
    console.log(`The id is ${id}`)
}; 
<button onClick={this.handleClick(id)} />
```
# Why do we need to pass a function to setState()?
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
