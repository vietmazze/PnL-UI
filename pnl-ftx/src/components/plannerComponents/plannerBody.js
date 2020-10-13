import React, { useState, useEffect, useContext} from "react";
import "../plannerComponents/plannerBody.css";
import { PlannerQuote } from "../plannerComponents/plannerQuote";
import Pomodoro from "./plannerPomo"
import {TimeContext, TimeProvider} from "../plannerComponents/pomodoro/TimerProvider"

export const PlannerBody = () => {
  const[timer,setTimer] = useContext(TimeContext)
  const {mode,time,name,active,progress} = timer

  return (
    <div className="planner-container">
      <div className="planner-body">
        <div className="planner-header">
          <h1 className="planner-header-h1">Productivity Planner</h1>
        </div>
        <div className="planner-quote">
          <PlannerQuote />
        </div>
        <div className="planner-split">
          {/* -- Planner section */}
          <div className="planner-content">
            <div className="planner-items">
              <div className="planner-item">
                <textarea className="planner-textarea" type="text" required />
                <label className="planner-label">First Task</label>
              </div>
              <div className="planner-item-buttons">
                <button className="planner-item-button">Start</button>
                <button className="planner-item-button">{progress}</button>
              </div>
            </div>

            <div className="planner-items">
              <div className="planner-item">
                <textarea className="planner-textarea" type="text" required />
                <label className="planner-label">Second Task</label>
              </div>
              <div className="planner-item-buttons">
                <button className="planner-item-button">Start</button>
                <button className="planner-item-button">Session</button>
              </div>
            </div>
            <div className="planner-items">
              <div className="planner-item">
                <textarea className="planner-textarea" type="text" required />
                <label className="planner-label">Third Task</label>
              </div>
              <div className="planner-item-buttons">
                <button className="planner-item-button">Start</button>
                <button className="planner-item-button">Button</button>
              </div>
            </div>
            <div className="planner-items">
              <div className="planner-item">
                <textarea className="planner-textarea" type="text" required />
                <label className="planner-label">Fourth Task</label>
              </div>
              <div className="planner-item-buttons">
                <button className="planner-item-button">Start</button>
                <button className="planner-item-button">Button</button>
              </div>
            </div>
          </div>
          <div className="planner-pomodoro"><Pomodoro/></div>
        </div>
        <div className="planner-note">
          <textarea
            className="planner-note-textarea"
            placeHolder="Take Notes..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};
