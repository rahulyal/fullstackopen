const Hello = () => {
  return (
    <p>Hello World!</p>
  );
}

const App = () => {
  const date =  new Date();
  return (
    <div>
      <p>Greetings !!!</p>
      <Hello />
      <Hello />
      <p>It is {date.toString()}</p>
    </div>
  );
}

export default App;