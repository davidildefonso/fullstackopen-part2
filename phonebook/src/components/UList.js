import React  from "react";

const UList = ({ data, handleClick  }) => {

  return (
    
							<ul>
										{data.map(person => 
												<li key={person.id} > {person.name} {person.number} <button  onClick={() => handleClick(person.id)} >Delete</button> </li> 
															
										)}

							
								
							</ul>
  );

}


export default UList;