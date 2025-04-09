import { useState } from "react"

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeft = () => {
    let incrementedLeft = left + 1
    setLeft(incrementedLeft)
    setTotal(right + incrementedLeft)
    setAllClicks(allClicks.concat('L'))
  }

  const handleRight = () => {
    let incrementedRight = right + 1
    setRight(incrementedRight)
    setTotal(left + incrementedRight)
    setAllClicks(allClicks.concat('R'))
  }

  // debugger

  return (
    <div>
      {left}
      <button onClick={handleLeft}>
        Left
      </button>
      <button onClick={handleRight}>
        Right
      </button>
      {right}
      <br />
      <p>
        {total}
      </p>
      <History history={allClicks} />
    </div>
  )
}

const History = ({ history }) => {
  if (history.length === 0) {
    return (
      <p>Track history of button presses here.</p>
    )
  } else {
    return (
      <p>{history.join(' ')}</p>
    )
  }
}

export default App