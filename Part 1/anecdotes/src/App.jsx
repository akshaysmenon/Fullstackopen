import { useState } from "react";

function App() {
  const anecdotesData = [
    {id: 1, text: "If it hurts, do it more often.", votes: 0},
    {id: 2, text: "Adding manpower to a late software project makes it later!", votes: 0},
    {id: 3, text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", votes: 0},
    {id: 4, text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", votes: 0},
    {id: 5, text: "Premature optimization is the root of all evil.", votes: 0},
    {id: 6, text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", votes: 0},
    {id: 7, text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.", votes: 0},
    {id: 8, text: "The only way to go fast, is to go well.", votes: 0},
  ];

  const getRandomAnecdoteIndex = () => {
    const minIndex = 0;
    const maxIndex = 7;
    return Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
  };

  const randomIndex = getRandomAnecdoteIndex();
  const [anecdotes, setAnecdotes] = useState(anecdotesData);
  const [selectedAnecdote, setSelectedAnecdote] = useState(
    anecdotes[randomIndex]
  );

  const setNextAnecdote = () => {
    const randomIndex = getRandomAnecdoteIndex();
    setSelectedAnecdote(anecdotes[randomIndex]);
  };

  const voteAnecdote = () => {
    setAnecdotes(anecdotes.map(anecdote => {
      if (anecdote.id === selectedAnecdote.id) {
        anecdote.votes = anecdote.votes + 1;
      }
      return anecdote;
    }));
  };

  return (
    <>
      {!!selectedAnecdote && <h4>{selectedAnecdote.text}</h4>}
      {!!selectedAnecdote && <h4>Has {selectedAnecdote.votes} votes </h4>}
      <button onClick={setNextAnecdote}>Next Anecdote</button>
      <button onClick={voteAnecdote}>Vote</button>
    </>
  );
}

export default App;
