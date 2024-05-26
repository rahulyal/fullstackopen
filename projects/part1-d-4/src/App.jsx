import { useState } from "react"

const App = () => {

  const [value, setValue] = useState(10)

  const handleValue = (value) => {
    // setValue(0)
    const handler = () => {
      setValue(value)
    }
    return handler
  }

  // tested this function with a value parameter, 
  // that would technically not be a function reference like we are doing now
  // it would be a function call that would directly access setState function,
  // which causes re-render infinite loop

  // const handleValueCheck = (value) => {
  //   setValue(value)
  // }
  //   <button onClick={handleValueCheck(230)}>
  //   Test
  //   </button>

  const handleValueCheck = () => {
    setValue(230)
  }

  const handleValueShort = (value) => () => setValue(value)

  const setToValue = (value) => {
    setValue(value)
  }

  return (
    <>
      {value}
      <br />
      <button onClick={handleValue(0)}>
        Reset value
      </button>
      <button onClick={handleValue(value + 1)}>
        Increment
      </button>
      <button onClick={handleValueShort(1000)}>
        Set to 1000
      </button>
      <button onClick={handleValueShort(value - 1)}>
        Decrement
      </button>
      <button onClick={handleValueCheck}>
        Test
      </button>
      <button onClick={() => { setToValue(value - 23) }}>
        Another Style
      </button>
      <Button handleClick={() => { setToValue(value + 23) }} text={'add 23'} />
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default App