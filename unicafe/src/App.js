import React, { useState } from 'react';


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Statistic = ({text, value}) => {



		switch (text) {
			case "Average":

				const average = ( value[0]  - value[2] ) / ( value[0] + value[1] + value[2] )  ;	

				return ( 
					<p> {text} {average || 0 } </p>
				);

				break;

			case "Positive":

				const positive =  value[0] * 100 / ( value[0] + value[1] + value[2] )  ;	
					 
				return ( 
					<p> {text} {positive || 0 } % </p>
				);

				break;
		
			default:

				return ( 
					<p> {text} {value} </p>
				);

				break;
		}
		
};

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
				<Statistic  text="Average" value={ [ good, neutral, bad ] } />
				<Statistic  text="Positive" value={ [ good, neutral, bad ] } />


    </div>
  );
}

export default App;