import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood(good+1)}
  const handleNeutral = () => {setNeutral(neutral+1)}
  const handleBad = () => {setBad(bad+1)}

  console.log(good, neutral, bad)
  return (
    <div>
      <h1>give feedback</h1>
      <Button buttontext={"good"} handleClick={handleGood} />
      <Button buttontext={"neutral"} handleClick={handleNeutral} />
      <Button buttontext={"bad"} handleClick={handleBad} />
      <h1>statistics</h1>
      <Details infotext={"good"} statevariable={good}/>
      <Details infotext={"neutral"} statevariable={neutral}/>
      <Details infotext={"bad"} statevariable={bad}/>
    </div>
  )
}

const Details = ({infotext,statevariable}) => {
  return(
    <>
    {infotext} {statevariable} <br></br>
    </>
  )
}

const Button = ({buttontext,handleClick}) => {
  return(
    <button onClick={handleClick}>
      {buttontext}
    </button>
  )
}

export default App