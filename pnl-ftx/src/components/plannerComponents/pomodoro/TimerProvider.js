import React, { useState, useEffect, createContext } from "react";
import "../plannerPomo.css";

// Sending props to other components
export const TimeContext = createContext();

export const TimeProvider = (props) => {
  const [currentProgress, setCurrentProgress] = useState({
    currActive: 1,
    currValue: 0,
    currProgress1: 0,
    currProgress2: 0,
  });
  const [timer, setTimer] = useState({
    // session: 1500,
    session: 300,
    break: 300,
    mode: "session",
    time: { currentTime: 300, startingTime: 300 },
    // time: { currentTime: 1500, startingTime: 1500 },
    active: false,
    name: "Pomodoro Timer",
    progress: 0,
  });

  return (
    <TimeContext.Provider
      value={[timer, setTimer, currentProgress, setCurrentProgress]}>
      {props.children}
    </TimeContext.Provider>
  );
};
