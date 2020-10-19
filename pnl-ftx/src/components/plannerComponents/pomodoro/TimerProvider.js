import React, { useState, useEffect, createContext } from "react";
import "../plannerPomo.css";

// Sending props to other components
export const TimeContext = createContext();

export const TimeProvider = (props) => {
  const [currentProgress, setCurrentProgress] = useState({
    currIndex: 1,
  });
  // const [timer, setTimer] = useState({
  //   session: 1500,
  //   break: 300,
  //   mode: "session",
  //   time: { currentTime: 1500, startingTime: 1500 },
  //   active: false,
  //   name: "Pomodoro Timer",
  //   progress: 0,
  // });

  const [timer, setTimer] = useState({
    session: 120,
    break: 120,
    mode: "session",
    time: { currentTime: 120, startingTime: 120 },
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
