import React, { useState } from 'react';


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Statistic = ({text, value}) => ( 
		<p> {text} {value} </p>
);

const Title = ({text}) => (
		<h1> {text} </h1>
);

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
     <div>

		 		<Title text="Give Feedback" />
			
				<Button handleClick={() => setGood(good +  1)}  text="Good" />

				<Button handleClick={() => setNeutral(neutral + 1)}  text="Neutral" />
		
				<Button handleClick={() => setBad(bad + 1)}   text="Bad" />


				<Title text="Statistics" />

				<Statistic  text="Good" value={good} />
				<Statistic  text="Neutral" value={neutral} />
				<Statistic  text="Bad" value={bad} />

    </div>
  );
}

export default App;