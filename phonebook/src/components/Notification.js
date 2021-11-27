import React  from "react";


const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

	const className = message.type === "success" ? "success" : "error" ; 

  return (
    <div className={className}>
      {message.msg}
    </div>
  )
}


export default Notification;

