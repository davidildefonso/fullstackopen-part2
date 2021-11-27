import React, { useState , useEffect} from "react";
import Section from "./components/Section.js";
import axios from 'axios';

const App = ({ data }) => {



	const [ persons, setPersons ] = useState() ;
  const [ newName, setNewName ] = useState('');
	const [ newPhone, setNewPhone ] = useState('');
	const [ filter, setFilter ] = useState(false);
	const [ searchName, setSearchName ] = useState("");

	useEffect(  () => {	
			fetchData();		
	}, []);

	async function fetchData() {
			const response = await axios.get('http://localhost:3001/persons');
			setPersons(response.data);
	}


  const addPerson = (event) => {
    event.preventDefault()

		if(persons.find(person =>  person.name === newName)){
				alert(`${newName} is already added to phonebook`)
				return;
		}

    const personObject = {
			name: newName,
			number: newPhone,		
			id: persons.length + 1,
		}

		setPersons(persons.concat(personObject));
		setNewName('');
		setNewPhone('');
  
	}

	const handleNewNameChange = (event) => {   
    setNewName(event.target.value)
  }

	const handleNewPhoneChange = (event) => {   

    setNewPhone(event.target.value)
  }

	const handleSearchChange = (event) => {  
			setSearchName(event.target.value); 
			if(event.target.value !== ""){
				setFilter(true);
				return;
			}
			setFilter(false);
  }

	const numbersToShow = () => {
			if(!filter) return persons;
			return persons.filter(person =>  person.name.match(new RegExp(searchName, "i")));
	} 



	if(numbersToShow()){
			return (
			

					<div>

							<Section title={"Phonebook"}  changeHandler = {handleSearchChange}  value = {searchName} label = {"filter shown with:"}   section = { "title"}  />


							<Section title={"Add new number"}  changeHandlerName = {handleNewNameChange}  valueName = {newName} labelName = {"name:"}   section = { "form"} 
								changePhoneHandler = {handleNewPhoneChange}  valuePhone = {newPhone} labelPhone = {"phone:"}  buttonText = {"add"}  addPerson = {addPerson} />

							<Section title={"Numbers"}  persons = {numbersToShow()}   section = { "persons"}  />

					</div>
				


			)
	}

	return null ;


};

export default App;