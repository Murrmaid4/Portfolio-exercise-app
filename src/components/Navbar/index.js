
import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa'




function Navbar(props ) {
  const [isOpen, setIsOpen] =  useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
      console.log("clicked")
  }
 

  return (
    <nav>
        <div className="nav-container">
    <button className="mobile-icon" onClick={toggle}>
    <FaBars />
    </button>
       <div className="nav-menu" >    
      <button onClick={() => props.setActiveExercise("HomeScreen")}>Home</button>
      <button onClick={() => props.setActiveExercise("Bicycling")}>Bicycling</button>
      <button onClick={() => props.setActiveExercise("Pushups")}>Pushups</button>
      <button onClick={() => props.setActiveExercise("Yoga")}>Yoga</button>
      <button onClick={() => props.setActiveExercise("Weight")}>Weights</button>
     </div>
      </div>
    </nav>
  );
}

export default Navbar;
