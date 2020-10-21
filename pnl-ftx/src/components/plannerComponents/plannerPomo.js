import React, { useContext } from "react";
import "../plannerComponents/plannerPomo.css";
import { TimeContext } from "./pomodoro/TimerProvider";
import { Title } from "./pomodoro/Title";
import { Timer } from "./pomodoro/Timer";
import { TimeController } from "./pomodoro/TimeController";
import { ButtonController } from "./pomodoro/ButtonController";
import firebase from "../../services/firebase";

const Pomodoro = () => {
  const [timer, setTimer, currentProgress] = useContext(TimeContext);

  const { mode, time, name, active, progress } = timer;
  const { currIndex } = currentProgress;
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

        firebase
          .firestore()
          .collection("planner")
          .doc(currIndex)
          .get()
          .then((query) => {
            const currLog = query.data().log;
            query.ref.update({ log: currLog >= 4 ? 0 : currLog + 1 });
            console.log("task progress updated");
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
