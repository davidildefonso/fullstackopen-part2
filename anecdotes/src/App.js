import React, { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);


const TopAnecdote = ({votes, anecdotes }) => {

		let top = -1;
		let position = null;

		votes.forEach((value, index) => {
				if(value > top) {
						 position = index;
						 top = value;
				} 
		});


		return (
			<div>
					<h3> Anecdote with most votes</h3>
					<p>   {anecdotes[position]}   </p>
			</div>
		);

}

const App = () => {



  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

   
  const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState([0, 0, 0, 0, 0 , 0, 0]);



	const addVote = () => {
			const copy = [...votes] ;
			copy[selected] += 1;
			setVotes(copy);
	};




  return (
    <div>
			<h3> Anecdote of the day </h3>
      <p>{anecdotes[selected]} </p>
			<p> has  {votes[selected]}  votes </p>
			<div>
				<Button text="next anecdote"  handleClick={ () => setSelected(Math.floor(Math.random() * anecdotes.length)) } />
				<Button text="vote"  handleClick={ () => addVote() } />
			</div>

			<TopAnecdote  anecdotes={anecdotes} votes={votes} />

    </div>
  )
}

export default App