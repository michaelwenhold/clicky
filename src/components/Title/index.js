import React from "react";
import "./style.css";

function Title(props) {
  return <div>
  <h3 className="title">{props.children}</h3>
  <h3 className="score">Your Score {props.total}</h3>
  <h3 className="status"> {props.status}</h3>
  
   </div> 
};

export default Title;