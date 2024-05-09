const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3= {exercises3}/>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

const Header = (props) => {
  console.log(props);
  return(
    <h1>{props.course}</h1>
  );
}

const Content = (props) => {
  return (
    <>
    <Part part={props.parts[0]} exercise={props.exercises[0]}/>
    <Part part={props.parts[1]} exercise={props.exercises[1]}/>
    <Part part={props.parts[2]} exercise={props.exercises[2]}/>
    </>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  );
}

export default App