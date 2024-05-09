const App = () => {
  const name = 'Tasya Rao'
  let age = 27
  
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name='Rahul Yal' age={21+5} />
    </div>
  )
}

const Hello = (props) => {

  const bornYear = () => new Date().getFullYear() - props.age

  return(
    <p>{props.name} is {props.age} years old, estimate year of birth: {bornYear()}</p>
  )
}

export default App