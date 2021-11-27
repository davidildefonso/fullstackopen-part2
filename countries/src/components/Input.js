import React  from "react";

const Input = ({ changeHandler, label, value  }) => {
  return (
    	<div>
						{label} <input value={value}  onChange={changeHandler} />
			</div>
  )
}


export default Input;