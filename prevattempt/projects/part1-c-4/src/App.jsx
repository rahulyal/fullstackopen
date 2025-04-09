import { useState } from "react";

let App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(
    () => {
      setCounter(counter +1);
      console.log("testing settimer function");
    }, 1000
  )
  console.log("rendering...", counter)
  return(
    <p>Hello World! , a counter is updated every second: {counter}</p>
  )
}

export default App