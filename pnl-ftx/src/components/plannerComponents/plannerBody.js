import React, { useContext, useState, useEffect } from "react";
import "../plannerComponents/plannerBody.css";
import { PlannerQuote } from "./plannerQuote";
import Pomodoro from "./PlannerPomo";
import { PlannerRefresh } from "./PlannerRefresh";
import { TimeContext, TimeProvider } from "./pomodoro/TimerProvider";
import { Progress } from "./pomodoro/Progress";
import firebase from "../../services/firebase";

const PlannerBody = () => {
  const [timer, setTimer, currentProgress] = useContext(TimeContext);
  const [planner, setPlanner] = useState([]);

  const onChangeProgress = (currentID, newProgress) => {
    const test = planner;
    const quest = test.map((item) => ({
      id: item.id,
      log: item.log,
      progress: item.id === currentID ? newProgress : item.progress,
      title: item.title,
    }));
    setPlanner(quest);
    firebase
      .firestore()
      .collection("planner")
      .doc(currentID.toString())
      .get()
      .then((query) => {
        query.ref.update({ progress: newProgress });
      });
  };

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("planner")
      .onSnapshot((snapshot) => {
        const prevPlanner = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlanner(prevPlanner);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className="planner">
      <div className="planner-container">
        <div className="planner-body">
          <div className="planner-header">
            <h1 className="planner-header-h1">Productivity Planner</h1>
            <PlannerRefresh />
          </div>
          <div className="planner-quote">
            <PlannerQuote />
          </div>
          <div className="planner-split">
            {/* -- Planner section */}
            <div className="planner-content">
              {planner.map((plan) => (
                <div className="planner-items" key={plan.id}>
                  <div className="planner-item">
                    <textarea
                      className="planner-textarea"
                      type="text"
                      defaultValue={plan.progress}
                      onBlur={(e) => onChangeProgress(plan.id, e.target.value)}
                      required></textarea>
                    <label className="planner-label">{plan.title}</label>
                  </div>
                </div>
              ))}
            </div>

            <div className="planner-progress-item">
              {planner.map((plan) => (
                <div className="planner-item-buttons" key={plan.id}>
                  <Progress progress={plan.log} currIndex={plan.id} />
                </div>
              ))}
            </div>

            <div className="planner-pomodoro">
              <Pomodoro />
            </div>
          </div>
          <div className="planner-note">
            <textarea
              className="planner-note-textarea"
              placeholder="Take Notes..."></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerBody;
