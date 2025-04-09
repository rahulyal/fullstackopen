const Hello = (props) => {
  console.log(props);
  return (
    <p>Hello {props.name}</p>
  )
}

const App = () => {
  let date = new Date();
  const age= 26;
  const name= 'rahul';
  return (
    <div>
      <p>Greetings !!!</p>
      <Hello name="tasya" age={26+1}/>
      <Hello name={name} age = {age}/>
      <p>Time right now: {date.toString()}</p>
    </div>
  );
}

export default App;