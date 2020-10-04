import React, { useState, useEffect } from "react";
import "../plannerComponents/plannerBody.css";

export const PlannerBody = () => {
  return (
    <div className="planner-container">
      <div className="planner-body">
        <div className="planner-header">Productivity Planner</div>
        <div className="planner-quote">quote</div>
        <div className="planner-content">
          <div className="planner-items">
            <div className="planner-item">
              <label className="planner-label">First Task</label>
              <input className="planner-input" type="text" />
            </div>
            <div className="planner-item-buttons">
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
            </div>
          </div>

          <div className="planner-items">
            <div className="planner-item">
              <label className="planner-label">Second Task</label>
              <input className="planner-input" type="text" />
            </div>
          </div>
          <div className="planner-items">
            <div className="planner-item">
              <label className="planner-label">Third Task</label>
              <input className="planner-input" type="text" />
            </div>
          </div>
          <div className="planner-items">
            <div className="planner-item">
              <label className="planner-label">Fourth Task</label>
              <input className="planner-input" type="text" />
            </div>
          </div>
        </div>
        <div className="planner-note">notes</div>
      </div>
    </div>
  );
};
