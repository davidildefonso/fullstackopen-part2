import React  from "react";
import Input from "./Input.js";
import Form from "./Form.js";
import UList from "./UList.js";

const Section = (  props  ) => {

	if(props.section === "title"){	
			return (
					<>
							<h2> {props.title} </h2>
							<Input  changeHandler = {props.changeHandler}  value = {props.searchName} label = {props.label} />
					</>			
			);	
	}

	if(props.section === "form"){
			const inputData = [
				 	{	id: 1,  changeHandler : props.changeHandlerName,  value : props.valueName, label : props.labelName	},
					{	id: 2,  changeHandler : props.changePhoneHandler,  value : props.valuePhone, label : props.labelPhone		}					
			];

		  return (
				<>
						<h2>{props.title}</h2>
						<Form  onSubmit={props.addPerson}  buttonText = {props.buttonText} 	inputData = {inputData} />						
				</>				
			);
	
	}

	return (
	 		<>
						<h2>{props.title}</h2>
						<UList  data = {props.persons} handleClick = {props.handleClick} />								
			</>				
	);
}


export default Section;