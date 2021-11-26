import React  from "react";
import Input from "./Input.js";

const Form = ( props ) => {

					
		return (
				<form  onSubmit={props.onSubmit} >
						{ props.inputData.map(data => 	<Input key = {data.id} changeHandler = {data.changeHandler}  value = {data.value} label = {data.label} />  )  }
					
						<div>
							<button type="submit">{props.buttonText} </button>
						</div>
				</form>
		)
}


export default Form;