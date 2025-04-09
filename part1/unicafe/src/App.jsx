import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const dataProps = {
    good: [good, setGood],
    neutral: [neutral, setNeutral],
    bad: [bad, setBad],
  };

  return (
    <div>
      <Header />
      <Button setter={setGood} value={good} text="good" />
      <Button setter={setNeutral} value={neutral} text="neutral" />
      <Button setter={setBad} value={bad} text="bad" />
      <Statistics dataProps={dataProps} />
    </div>
  );
};

const Header = () => {
  return (
    <>
      <h1>give feedback</h1>
    </>
  );
};

const Statistics = ({ dataProps }) => {
  console.log(dataProps);
  const total = dataProps.good[0] + dataProps.neutral[0] + dataProps.bad[0];
  const average = (dataProps.good[0] - dataProps.bad[0]) / total;
  const positive = (dataProps.good[0] / total) * 100;
  return (
    <>
      <h1>statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={dataProps.good[0]} />
            <StatisticLine text="neutral" value={dataProps.neutral[0]} />
            <StatisticLine text="bad" value={dataProps.bad[0]} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      )}
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {/* <p style={{ margin: 0 }}>
        {text}: {value} {text === "positive" && "%"}
      </p> */}
      <tr>
        <td>{text}</td>
        <td>
          {value} {text === "positive" && "%"}
        </td>
      </tr>
    </>
  );
};

const Button = ({ setter, value, text }) => {
  return (
    <>
      <button type="button" onClick={() => setter(value + 1)}>
        {text}
      </button>
    </>
  );
};

export default App;
