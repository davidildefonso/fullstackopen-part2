import React from "react";

const Hello = (props) => (
	<p>  hello {props.name}! you are {props.age} years old </p>
)

const App = () => {

	const now = new Date();
	const a = 10;
	const b = 12;

	return (
			<>
				<Hello name="David"  age="32" />
				<p> how es {now.toString()} </p>
				<Hello name="Sebastian" age="9"  />
				<p> {a} + {b} = { a + b } </p>
				<Hello  name="Magaly" age="37"  />
				<Hello name="Serafina" age="13" />
			</>
			
	)
	
}
	
;

export default App;