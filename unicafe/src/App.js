import React, { useState } from 'react';


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const StatisticLine  = ({text, value}) => {



		switch (text) {
			case "Average":

				const average = ( value[0]  - value[2] ) / ( value[0] + value[1] + value[2] )  ;	

				return ( 
					<tr><td>  {text} </td><td> {average || 0 }  </td></tr>
				);

				break;

			case "Positive":

				const positive =  value[0] * 100 / ( value[0] + value[1] + value[2] )  ;	
					 
				return ( 
				
						<tr><td>  {text} </td><td> {positive || 0 } %  </td></tr>
				);

				break;

			case "All":

				const total = value[0] + value[1] + value[2]   ;	
					 
				return ( 
				
						<tr><td>  {text} </td><td> {total  }   </td></tr>
				);

				break;
		
			default:

				return ( 				
						<tr><td>  {text} </td><td> {value }   </td></tr>
				);

				break;
		}
		
};

const Title = ({text}) => (
		<h1> {text} </h1>
);

const StatisticsTable = ({feedback}) => {
	
	const [good, neutral, bad] = feedback;

	if(good === 0 && neutral === 0 && bad === 0){

			return (
				<p>No feedback given</p>
			);
	}

	return (
		<table>
				<tbody>
					<StatisticLine   text="Good" value={good} />
					<StatisticLine   text="Neutral" value={neutral} />
					<StatisticLine   text="Bad" value={bad} />
					<StatisticLine   text="All"  value={ [ good, neutral, bad ] } />
					<StatisticLine   text="Average" value={ [ good, neutral, bad ] } />
					<StatisticLine   text="Positive" value={ [ good, neutral, bad ] } />
				</tbody>
		</table>
	);


}

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
				<StatisticsTable feedback = {[ good, neutral, bad ]}  /> 
    </div>
  );
}

export default App;