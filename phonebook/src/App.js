import React, { useState } from "react";
import Section from "./components/Section.js";

const App = ({ data }) => {

	const [ persons, setPersons ] = useState([
     	{ name: 'Arto Hellas', number: '040-123456', id: 1 },
			{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
			{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
			{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) ;
  const [ newName, setNewName ] = useState('');
	const [ newPhone, setNewPhone ] = useState('');
	const [ filter, setFilter ] = useState(false);
	const [ searchName, setSearchName ] = useState("");

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





  return (
   

			<div>

					<Section title={"Phonebook"}  changeHandler = {handleSearchChange}  value = {searchName} label = {"filter shown with:"}   section = { "title"}  />


					<Section title={"Add new number"}  changeHandlerName = {handleNewNameChange}  valueName = {newName} labelName = {"name:"}   section = { "form"} 
						changePhoneHandler = {handleNewPhoneChange}  valuePhone = {newPhone} labelPhone = {"phone:"}  buttonText = {"add"}  addPerson = {addPerson} />

					<Section title={"Numbers"}  persons = {numbersToShow()}   section = { "persons"}  />

			</div>
		


  )
};

export default App;