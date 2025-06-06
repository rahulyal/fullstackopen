import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [highestVoted, setHighestVoted] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };
  const handleShuffleAnecdote = () => {
    const index = getRandomIndex(8);
    console.log(index, anecdotes[index]);
    setSelected(index);
  };
  const handleVote = () => {
    console.log(votes);

    if (votes[highestVoted] < votes[selected] + 1) {
      setHighestVoted(selected);
    }

    setVotes({ ...votes, [selected]: votes[selected] + 1 });
    // const copy = [...votes];
    // copy[selected] += 1;
    // setVotes(copy);

    console.log(votes);
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p style={{ margin: 0 }}>{anecdotes[selected]}</p>
      <p style={{ margin: 0 }}>has {votes[selected]} votes</p>
      <button type="button" onClick={handleVote}>
        vote
      </button>
      <button type="button" onClick={handleShuffleAnecdote}>
        next anecdote
      </button>
      <Header text="Anecdote with most votes" />
      <p style={{ margin: 0 }}>{anecdotes[highestVoted]}</p>
      <p style={{ margin: 0 }}>has {votes[highestVoted]} votes</p>
    </div>
  );
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

export default App;
