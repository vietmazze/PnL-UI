import React from 'react'
import "./Timer.css"
export const Timer = (props) => {

    // converts seconds to min:sec string format
    function formatTime(time){ 
        let minutes = Math.floor(time / 60);
        if(minutes < 10){
            minutes = "0"+minutes
        }
        let seconds = Math.floor(time - minutes * 60);
        if(seconds < 10){
            seconds = "0"+seconds
        }
        return `${minutes}:${seconds}`;
    }

    return(
    <div className="wrapper">
      <div className="counter">
        
        <div id="time-left">{formatTime(props.time.currentTime)}</div>
        <span className="counterType" id="timer-label">{props.mode}</span>
      </div>
    </div>
  )
}