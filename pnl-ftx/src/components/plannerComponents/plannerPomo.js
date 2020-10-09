import React, { useState, useEffect, createContext } from "react";
import "../plannerComponents/plannerPomo.css"

// Sending props to other components
const TimeContext = createContext();

// Set initial time props for Pomodoro
const TimeProvider = props => {
  const [timer,setTimer] = useState({
    session: 1500,
    break: 300,
    mode: 'session',
    time: {currentTime: 1500, startingTime: 1500},
    active: false,
    name: 'Pomodoro Timer',
    progress: 0
  })


  return ( 
    <TimeContext.Provider value={[timer,setTimer]}>
      {props.children}
    </TimeContext.Provider>
  )
}



const Pomodoro = () => {
  return (
  <div className="pomo-container">
    <div className="pomo">
      <div className="pomo-title">session</div>
      <div className="pomo-timer">25:00</div>
      <div className="pomo-timer-progress"> 0 0 0 0</div>
      <div className="pomo-time-controller">25 mins</div>
      <div className="pomo-button-controller">Stop and Refresh</div>
      <div className="pomo-audio">Sound</div>
    </div>
  </div>
  );
};


export default Pomodoro;

