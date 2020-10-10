import React, { useState, useEffect, createContext,useContext} from "react";
import "../plannerComponents/plannerPomo.css"
import {TimeContext, TimeProvider} from "../plannerComponents/pomodoro/TimerProvider"
const Pomodoro = () => {

  const[timer,setTimer] = useContext(TimeContext)
  const {mode,time,name,active,progress} = timer

  return (
  <div className="pomo-container">
    <div className="pomo">
      <Title title={name}/>
      <Timer mode={mode} time={time}/>
      <Progress progress={progress}/>
      <TimeController label={'session'}/>
      <TimeController label={'break'}/>
      <div className="pomo-button-controller">Stop and Refresh</div>
      <div className="pomo-audio">Sound</div>
    </div>
  </div>
  );
};

const Title = (props) => {
  return (
    <header>
      <h1 className="pomo-title">{props.title}</h1>
    </header>
  )
}


const Timer = (props) => {
  return ( 
    <div className="wrapper">
      <div className="counter">
        <span className="counterType" id="timer-label">{props.mode}</span>
        <div id="time-left">{props.time.currentTime}</div>
      </div>
    </div>
  )
}


const Progress = (props) => {
  // filling the array of size 5 with "true" from index 0 to progress
  let progress = new Array(4).fill(1).fill(true,0,props.progress);
  return (
    <div>
       {progress.map((item,index) => (
      <span key={index} className="">{item}</span>
    ))}

    </div>
   

  )
}

function TimeController(props) {
  const [timer,setTimer] = React.useContext(TimeContext);

  return (
    <div className="TimeController">
      <button>-</button>
      <div className="wrapperDisplay">
        <span className="label">{props.label}</span>
        <div className="time">25</div>
      </div>
      <button>+</button>
    </div>
  )
}
export default Pomodoro;

