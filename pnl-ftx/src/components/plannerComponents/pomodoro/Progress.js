import React, { useContext } from "react";
import "./Progress.css";
import { TimeContext, TimeProvider } from "./TimerProvider";
import firebase from "../../../services/firebase";

export const Progress = (props) => {
  const [timer, setTimer, currentProgress, setCurrentProgress] = useContext(
    TimeContext
  );

  // const { currIndex, currProgress1, currProgress2 } = currentProgress;

  const setActive = (e, index) => {
    e.preventDefault();
    setTimer({
      ...timer,
      active: !timer.active,
    });
    setCurrentProgress({
      ...currentProgress,
      currIndex: index,
    });
  };

  // filling the array of size 5 with "true" from index 0 to progress
  let progress = new Array(4)
    .fill(0)
    .fill(true, 0, props.progress == null ? 0 : props.progress);
  return (
    <div className="progress-container">
      {progress.map((item, index) => (
        <button
          key={index}
          className={`dot ${progress[index] ? "completed" : ""}`}
          onClick={(e) => setActive(e, props.currIndex)}></button>
      ))}
    </div>
  );
};
