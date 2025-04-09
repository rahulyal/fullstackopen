const App = () => {
  // const course = "Half Stack application development";

  // const content = {
  //   part1: {
  //     part: "Fundamentals of React",
  //     exercises: 10,
  //   },
  //   part2: {
  //     part: "Using props to pass data",
  //     exercises: 7,
  //   },
  //   part3: {
  //     part: "State of a component",
  //     exercises: 14,
  //   },
  // };

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseProp={course.name} />
      <Content contentProp={course.parts} />
      <Total exercisesProp={course.parts} />
    </div>
  );
};

const Header = ({ courseProp }) => {
  console.log(courseProp);
  return (
    <>
      <h1>{courseProp}</h1>
    </>
  );
};

const Part = ({ partProp }) => {
  return (
    <>
      <p>
        {partProp.name} {partProp.exercises}
      </p>
    </>
  );
};

const Content = ({ contentProp }) => {
  console.log(contentProp[0]);
  return (
    <>
      <Part partProp={contentProp[0]} />
      <Part partProp={contentProp[1]} />
      <Part partProp={contentProp[2]} />
    </>
  );
};

const Total = ({ exercisesProp }) => {
  const exercises1 = exercisesProp[0].exercises;
  const exercises2 = exercisesProp[1].exercises;
  const exercises3 = exercisesProp[2].exercises;
  // prompt("testing");
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

export default App;
