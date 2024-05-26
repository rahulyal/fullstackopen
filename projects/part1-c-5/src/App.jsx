import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => setCounter(counter + 1)
  const handleReset = () => setCounter(0)
  const handleDecrement = () => setCounter(counter - 1)

  return (
    <>
      <p>
        COunter: {counter}
      </p>
      <Button onClick={handleIncrement} text='increment' />
      <Button onClick={handleReset} text='reset' />
      <Button onClick={handleDecrement} text='decrement' />
    </>
  )
}

const Counter = ({ counter }) => {
  return (
    <p>{counter}</p>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App
