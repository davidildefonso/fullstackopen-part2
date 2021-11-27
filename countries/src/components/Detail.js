import React, { useEffect, useState}  from "react";
import axios from 'axios';

const Detail = ( props ) => {

		const [weather, setWeather] = useState(null);

		useEffect(  () => {	
				fetchData(props.country.capital);		
		}, []);

		async function fetchData(capital) {
				if(capital && capital !== ""){
				console.log(process.env)
					const response = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP__WEATHER_API_KEY}&query=${capital}`);
					console.log(response.data)
					setWeather(response.data);
				}else{
						setWeather(null);
				}
			
		}


					
		return (
				<div   >
						<h1> {props.country.name.common}  </h1>

						<p> capital: {props.country.capital} </p>
						<p> region: {props.country.region} </p>

						<h2> Languages </h2>

						<ul>
							{ Object.keys(props.country.languages).map(data => 
										<li key = {new Date() + Math.random() * 100000} > {props.country.languages[data]}  </li>  )  }
					
						
						</ul>
						
						<div>
							<img width= "50" alt="country flag"  src= {props.country.flags.svg} />
						</div>

						<div>
							<h2 >  Wheater in {props.country.capital} </h2>
							<p> <span> Temperature: </span>  {weather && weather.current.temperature} Celcius</p>
							<img width="30" alt="weather icon" src={weather &&weather.current.weather_icons[0]} />
							<p> <span>Wind: </span> {weather && weather.current.wind_speed} mph <span> direction: </span> {weather && weather.current.wind_dir}  </p>
						</div>


				</div>
		)
}


export default Detail;