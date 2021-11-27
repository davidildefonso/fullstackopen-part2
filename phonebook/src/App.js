import React, { useState , useEffect} from "react";
import Section from "./components/Section.js";
import personService from './services/persons.js';

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
			const data = await personService.getAll();
			setPersons(data);
	}


  const addPerson = async (event) => {
    event.preventDefault();

		const personObject = {
			name: newName,
			number: newPhone,		
		};

		const personExists = persons.find(person =>  person.name === newName);

		if(personExists){

				const confirmUpdateNumber = window.confirm(` ${ newName } was already added to the phonebook, do you want to replace their phone number ?`);

				if(confirmUpdateNumber){
						const data = await personService.update(personExists.id, personObject);
						setPersons(persons.map(person => person.id === data.id ?  data : person  ));
				}
				
				setNewName('');
				setNewPhone('');

				return;
		}
  

		const data = await personService.create(personObject);
		setPersons(persons.concat(data));
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
	} ;

	const handleClick = async (id)  => {
			const confirmDelete = window.confirm(`Are you sure to delete person ${ persons.find(person => person.id === id).name } from the phonebook?`);
			if(confirmDelete){
					await personService.remove(id);
					setPersons(persons.filter(person => person.id !== id));
			}
		
	};



	if(numbersToShow()){
			return (
			

					<div>

							<Section title={"Phonebook"}  changeHandler = {handleSearchChange}  value = {searchName} label = {"filter shown with:"}   section = { "title"}  />


							<Section title={"Add new number"}  changeHandlerName = {handleNewNameChange}  valueName = {newName} labelName = {"name:"}   section = { "form"} 
								changePhoneHandler = {handleNewPhoneChange}  valuePhone = {newPhone} labelPhone = {"phone:"}  buttonText = {"add"}  addPerson = {addPerson} />

							<Section title={"Numbers"}  persons = {numbersToShow()} handleClick = {handleClick}  section = { "persons"}  />

					</div>
				


			)
	}

	return null ;


};

export default App;