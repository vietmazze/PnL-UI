import React, { useState, useEffect, createContext,useContext} from "react";
import "../plannerComponents/plannerPomo.css"
import {TimeContext, TimeProvider} from "../plannerComponents/pomodoro/TimerProvider"
import {Title} from "../plannerComponents/pomodoro/Title"
import {Timer} from "../plannerComponents/pomodoro/Timer"
import {Progress} from "../plannerComponents/pomodoro/Progress"
import {TimeController} from "../plannerComponents/pomodoro/TimeController"
import {ButtonController} from "../plannerComponents/pomodoro/ButtonController"
const Pomodoro = () => {

  const[timer,setTimer] = useContext(TimeContext)
  const {mode,time,name,active,progress} = timer

   // create ref for the audio
   const beep = React.useRef();
    

   React.useEffect(() => {
       if(timer.active  && timer.time.currentTime > 0){
               const interval = setInterval(() => {
                   setTimer({
                       ...timer, 
                       time: {
                           startingTime: timer.time.startingTime,
                           currentTime: timer.time.currentTime-1
                   }});
               }, 1000);
               return () => clearInterval(interval);
       } else if (timer.time.currentTime === 0) {
               beep.current.play();
               beep.current.currentTime = 0;
               //    setTimeout(() => {
                      if (timer.mode === 'session') {
                          setTimer({
                              ...timer,
                              time: {
                                  currentTime: timer.break,
                                  startingTime: timer.break
                              },
                              mode: 'break',
                          });
                      }
                      if (timer.mode === 'break') {
                          setTimer({
                              ...timer,
                              time: {
                                  currentTime: timer.session,
                                  startingTime: timer.session
                              },
                              mode: 'session',
                              progress: timer.progress+1,
                          });
                      }
               //    }, 2500);
                  
              }
   }, [setTimer, timer]);

   React.useEffect(() => {
       if(timer.playPause){
           beep.current.pause();
           beep.current.currentTime = 0;
       }
   })

  return (
  <div className="pomo-container">
    <div className="pomo">
      <Title title={name}/>
      <Timer mode={mode} time={time}/>
      <Progress progress={progress}/>
      <TimeController durationId={timer.session}
                 type="session"
                 label={'Session'}
                 lengthId={'session-length'}
                 labelId={'session-label'}/>
      <TimeController  durationId={timer.break}
                 type="break"
                 label={'Break'}
                 lengthId={'break-length'}
                 labelId={'break-label'}/>
       <ButtonController playing={timer.active} myRef={beep}/>
       <audio
                 id="beep"
                 preload="auto"
                 src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
                 ref={beep}
             ></audio>
    </div>
  </div>
  );
};


export default Pomodoro;

