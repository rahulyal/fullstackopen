import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let counter = 1

const refresh = () => {
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App counter={counter} />
  </React.StrictMode>,
)
}

// refresh();
// counter += 1;
// refresh();
// counter += 1;
// refresh()

setInterval( () => {
  refresh()
  counter += 1
}, 1000
)

// Warning to not call createRoot over an existing one
// call it usin root.render() or this counter thing can be built using a stateful component
// using a react hook useState alongside a state variable