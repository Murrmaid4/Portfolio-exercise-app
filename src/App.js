
import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Bicycling from './components/BikeExerciseBtn';
import Home from './components/HomeButton';
import Pushups from './components/PushUpExerciseBtn';
import Yoga from './components/YogaJournalBtn';
import Weights from './components/WeightLogBtn';



function App() {

  const [activeExercise, setActiveExercise] = useState("HomeScreen")


  return (
    <div className="App">

    <Navbar setActiveExercise={setActiveExercise}   />
    <div>
    
    { activeExercise === "HomeScreen" && <Home title="Exercise App"/> }
     { activeExercise === "Bicycling" && <Bicycling title="Bicycling"/> }
    {activeExercise === "Pushups" && <Pushups title="Pushups"/>}
    {activeExercise === "Yoga" && <Yoga title="Yoga Journal"/>}
    {activeExercise === "Weight" && <Weights title="Weight Log"/>}

    </div>
    </div>
  );
}

export default App;


/*  My resource links 


https://beta.reactjs.org/learn

https://www.youtube.com/watch?v=eGaaw1Py2aY

https://www.youtube.com/watch?v=O6P86uwfdR0&t=403s


Professor Murrays lab videos and this weeks demonstration were also really helpful for understanding the timer function as well 


*/