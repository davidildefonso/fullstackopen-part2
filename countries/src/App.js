import React, { useState , useEffect} from "react";
import Input from "./components/Input.js";
import Detail from "./components/Detail.js";
import UList from './components/UList.js';
import axios from 'axios';

const App = ({ data }) => {



	const [ countries, setCountries ] = useState() ;
  const [ name, setName ] = useState('');


	useEffect(  () => {	
			fetchData(name);		
	}, [name]);

	async function fetchData(name) {
			if(name && name !== ""){
				const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
				setCountries(response.data);
			}else{
					setCountries(null);
			}
		
	}




	const handleChange = (event) => {   
    setName(event.target.value)
  }




	const content = () => {
	
			if(!countries){
					return null;
			}

			if(countries.length === 1){
					return <Detail country = {countries[0]} />;
			}

			if(countries.length <= 10){
					return <UList  countries = {countries} />;
			}

			return <p> Too many matches, specify another filter </p>

		

	}



	return (
			

					<div>

							<Input  changeHandler = {handleChange}  value = {name} label = {"Search country"}    />
						
							{content()  }
					

					</div>
				


			);
	




};

export default App;