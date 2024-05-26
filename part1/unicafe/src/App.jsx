import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => { setGood(good + 1) }
  const handleNeutral = () => { setNeutral(neutral + 1) }
  const handleBad = () => { setBad(bad + 1) }

  console.log(good, neutral, bad)
  return (
    <div>
      <h1>give feedback</h1>
      <Button buttontext={'good'} handleClick={handleGood} />
      <Button buttontext={'neutral'} handleClick={handleNeutral} />
      <Button buttontext={'bad'} handleClick={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 & neutral === 0 & bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h1>statistics</h1>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={(good + bad + neutral)} />
        <StatisticLine text={'average'} value={(good - bad) / (good + bad + neutral)} />
        <StatisticLine text={'positive'} value={((good) / (good + bad + neutral)) * 100} />
      </>
    )
  }
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {text} {value} {text === 'positive' ? '%' : ''}<br></br>
    </>
  )
}

const Button = ({ buttontext, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {buttontext}
    </button>
  )
}

export default App