import { useState } from "react"

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
    setAllClicks(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
    setAllClicks(allClicks.concat('R'))
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
      <br />
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App
