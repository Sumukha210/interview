###React interview questions

- Name the lifecycle methods and their purpose
  > [React life cycle methods](https://reactjs.org/docs/react-component.html)
  >
  > - constructor- we define the state in here
  > - render is must method
  > - componentDidmount- this calls after the render method. Only calls when component is constructed. This calls only one time when component is rendered to screen (or vDom)
  > - componentDidUpdate- this calls when the state changes
  > - componentWillUnmount - this method is called when a component is taken out of the dom, clean up
- why dow we use arrow functions in react?
  > Arrow functions don't have its own `this` soo it would takes from lexical scope(parent)
- How prevent component from re-rendering?
  > - shouldComponentUpdate,React.Memo(if the input is same),React.purecomponent(it compares prev and current state and stops rendering) and useEffect
- What is unidirectional data flow in react ?

  > Refer this article in geekforgeek [unidirectional data flow in react](https://www.geeksforgeeks.org/unidirectional-data-flow/)

- Explain useEffect hook?

- Explain Lifting state up in React js.
  > Refer this article in tutorialpoint [lifting state up in react](https://www.tutorialspoint.com/lifting-state-up-in-react-js) or in geekforgeek [lifting state up in react](https://www.geeksforgeeks.org/lifting-state-up-in-reactjs/)
- Difference b/w props and state
- Explain Error boundaries?
- What is Ref in React?
- What is controlled and uncontrolled component?
  > **Controlled component** is bound to data or state. In other words it is controlled by state
  > **Uncontrolled component** is not bound to state or data. In other words it is not controlled by any state, in order to access the value we can useRef hook
- Best lifecycle methods for making API calls
- What are keys?
- What is context or Context api?
- What is Higher order component(HOC)?
- What is render props?
- What is React hooks?
  > React hooks are functions that hook into react state and we can use lifecycle methods inside functional component, before which is not possible. it much easier to read and understand,now redux also hooks like useDispatch,useSelector. Also we can custom hooks
- Rules for using Hooks?
  > only call hooks at the top level, don't call inside conditions,loops or nested functions
  > call hooks from custom hooks or component, don't call hooks from regular functions
- How to debug React hooks?
  > `console.log()`, `React developer tools`, `Debugger statements`, `useDebugValue`
- What is React memo,useMemo and useCallback?
