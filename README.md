# fullstackopen

Submissions Repo for FullStackOpen

How to set up a React application using Vite ? 

```bash
npm create vite@latest test-project -- --template react 
cd test-project 
npm install 
npm run dev
```

#### Questions

**part1-c-4**: The second time the component function is executed it calls the *useState* function and returns the new value of the state: 1. Executing the function body again also makes a new function call to *setTimeout*, which executes the one-second timeout and increments the *counter* state again. Because the value of the *counter* variable is 1, incrementing the value by 1 is essentially the same as an expression setting the value of *counter* to 2.

```jsx
() => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}
```

if everytime this component function is re-rendered, is the setTimeout function re-triggered as well to have like a different setTimeout functions running in the background ?
