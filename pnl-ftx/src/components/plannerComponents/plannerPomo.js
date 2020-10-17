import React, { useContext } from "react";
import "../plannerComponents/plannerPomo.css";
import { TimeContext, TimeProvider } from "./pomodoro/TimerProvider";
import { Title } from "./pomodoro/Title";
import { Timer } from "./pomodoro/Timer";
import { Progress } from "./pomodoro/Progress";
import { TimeController } from "./pomodoro/TimeController";
import { ButtonController } from "./pomodoro/ButtonController";
const Pomodoro = () => {
  const [timer, setTimer, currentProgress, setCurrentProgress] = useContext(
    TimeContext
  );

  const { mode, time, name, active, progress } = timer;
  const {
    currIndex,
    currProgress1,
    currProgress2,
    currProgress3,
    currProgress4,
  } = currentProgress;
  // create ref for the audio
  const beep = React.useRef();

  React.useEffect(() => {
    if (timer.active && timer.time.currentTime > 0) {
      const interval = setInterval(() => {
        setTimer({
          ...timer,
          time: {
            startingTime: timer.time.startingTime,
            currentTime: timer.time.currentTime - 1,
          },
        });
      }, 10);
      return () => clearInterval(interval);
    } else if (timer.time.currentTime === 0) {
      beep.current.play();
      beep.current.currentTime = 0;
      //    setTimeout(() => {
      if (timer.mode === "session") {
        setTimer({
          ...timer,
          time: {
            currentTime: timer.break,
            startingTime: timer.break,
          },
          mode: "break",
        });
      }
      if (timer.mode === "break") {
        setTimer({
          ...timer,
          time: {
            currentTime: timer.session,
            startingTime: timer.session,
          },
          mode: "session",
          progress: timer.progress + 1,
          active: !timer.active,
        });

        setCurrentProgress({
          ...currentProgress,
          currProgress1: currIndex === 1 ? currProgress1 + 1 : currProgress1,
          currProgress2: currIndex === 2 ? currProgress2 + 1 : currProgress2,
          currProgress3: currIndex === 3 ? currProgress3 + 1 : currProgress3,
          currProgress4: currIndex === 4 ? currProgress4 + 1 : currProgress4,
        });
      }
      //    }, 2500);
    }
  }, [setTimer, timer]);

  React.useEffect(() => {
    if (timer.playPause) {
      beep.current.pause();
      beep.current.currentTime = 0;
    }
  });

  return (
    <div className="pomo-container">
      <div className="pomo">
        <Title title={name} />

        <div>
          <Timer mode={mode} time={time} />
        </div>
        <ButtonController playing={timer.active} myRef={beep} />

        <div className="time-controller-split">
          <TimeController
            durationId={timer.session}
            type="session"
            label={"Session"}
            lengthId={"session-length"}
            labelId={"session-label"}
          />
          <TimeController
            durationId={timer.break}
            type="break"
            label={"Break"}
            lengthId={"break-length"}
            labelId={"break-label"}
          />
        </div>

        <audio
          id="beep"
          preload="auto"
          src="https://www.soundjay.com/human/sounds/applause-4.mp3"
          ref={beep}></audio>
      </div>
    </div>
  );
};

export default Pomodoro;
