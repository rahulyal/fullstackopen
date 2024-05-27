import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // MDN docs for random number generation in JS
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  const handleNext = () => {
    // console.log(getRandomInt(anecdotes.length))
    // console.log(getRandomInt(anecdotes.length))
    setSelected(getRandomInt(anecdotes.length))
  }

  const handleVotes = (selected) => {
    // console.log(points)
    const copy = { ...points }
    const handler = () => {
      copy[selected] += 1
      // console.log('call from handler', copy)
      setPoints(copy)
    }
    return handler
  }

  const findMaxAnecdote = (points) => {
    let ans = 0
    let item = 0
    for (const point in points) {
      if (points[point] >= ans) {
        ans = points[point]
        item = point
      }
    }
    console.log('am I finding anecdote', item, points)
    return item
  }

  const findMaxPoints = (points) => {
    let ans = 0
    for (const point in points) {
      if (points[point] >= ans) {
        ans = points[point]
      }
    }
    console.log('am I finding max points correctly', ans, points)
    return ans
  }

  console.log(points, selected)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <button onClick={handleVotes(selected)}>
        vote
      </button>
      <button onClick={handleNext}>
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[findMaxAnecdote(points)]}
      <br />
      has {findMaxPoints(points)} votes
    </div>
  )
}

export default App