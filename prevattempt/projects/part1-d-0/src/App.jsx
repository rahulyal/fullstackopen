import { useState } from "react"

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleRight = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
    console.log('increasing the right wing by 1, ' + JSON.stringify(newClicks))
  }

  const handleLeft = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
    console.log('increasing the left wing by 1, ' + JSON.stringify(newClicks))
  }

  return (
    <>
      {clicks.left}
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      {clicks.right}
    </>
  )
}

export default App