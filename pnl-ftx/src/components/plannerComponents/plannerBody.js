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
  const [note, setNote] = useState([]);

  const onChangeProgress = (currentId, newProgress) => {
    const activeProgress = planner.map((item) => ({
      id: item.id,
      log: item.log,
      progress: item.id === currentId ? newProgress : item.progress,
      title: item.title,
    }));
    setPlanner(activeProgress);
    firebase
      .firestore()
      .collection("planner")
      .doc(currentId.toString())
      .get()
      .then((query) => {
        query.ref.update({ progress: newProgress });
      });
  };

  const onNoteChange = (currentId, newNote) => {
    console.log(currentId);

    const activeNote = note.map((item) => ({
      id: item.id,
      extra: item.id === currentId ? newNote : item.extra,
    }));
    setNote(activeNote);
    firebase
      .firestore()
      .collection("note")
      .doc(currentId)
      .get()
      .then((query) => {
        query.ref.update({ extra: newNote });
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
        console.log(prevPlanner);
        setPlanner(prevPlanner);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("note")
      .onSnapshot((snapshot) => {
        const activeNote = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(activeNote);
        setNote(activeNote);
      });

    return () => unsub();
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
          {note.map((item) => (
            <div className="planner-note" key={item.id}>
              <textarea
                key={item.id}
                className="planner-note-textarea"
                defaultValue={item.extra}
                onBlur={(e) =>
                  onNoteChange(item.id, e.target.value)
                }></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlannerBody;
