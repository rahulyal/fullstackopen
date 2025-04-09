const App = () => {
  const name = 'Tasya Rao'
  let age = 27

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name='Rahul Yal' age={26}/>
    </div>
  )
}

const Hello = ({name,age}) => {
  const yearBorn = () => new Date().getFullYear() - age
  return(
    <p>Hello {name}, {age} - Your estimate year of birth is {yearBorn()}</p>
  )
}

export default App