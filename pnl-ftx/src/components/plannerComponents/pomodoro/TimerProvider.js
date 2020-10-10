import React, { useState, useEffect, createContext } from "react";



// Sending props to other components
export const TimeContext = createContext();


export const TimeProvider = props => {
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
  