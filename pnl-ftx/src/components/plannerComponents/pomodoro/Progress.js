import React, { useContext } from "react";
import "./Progress.css";
import { TimeContext, TimeProvider } from "./TimerProvider";

export const Progress = (props) => {
  const [timer, setTimer, currentProgress, setCurrentProgress] = useContext(
    TimeContext
  );

  const { mode, time, name, active } = timer;
  const { currActive, currProgress1, currProgress2 } = currentProgress;

  const setActive = (index) => {
    setTimer({
      ...timer,
      active: !timer.active,
    });
    setCurrentProgress({
      ...currentProgress,
      currActive: index,
    });
    console.log(currActive);
  };

  // filling the array of size 5 with "true" from index 0 to progress
  let progress = new Array(4).fill(0).fill(true, 0, props.progress);
  return (
    <div className="progress-container">
      {progress.map((item, index) => (
        <button
          key={index}
          className={`dot ${progress[index] ? "completed" : ""}`}
          onClick={(index) => setActive(index)}></button>
      ))}
    </div>
  );
};