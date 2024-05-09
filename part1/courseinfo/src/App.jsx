const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1,part2,part3]}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const Total = ({total}) => {
  return(
    <p>Number of exercises {total}</p>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </div>
  )
}

const Part = ({part,exercise}) => {
  return(
    <p>
        {part} {exercise}
    </p>
  )
}

const Header = ({course}) => {
  return(
    <h1>{course}</h1>
  )
}

export default App