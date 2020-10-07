import React, { useState, useEffect } from "react";
import "../plannerComponents/plannerBody.css";
import { PlannerQuote } from "../plannerComponents/plannerQuote";

export const PlannerBody = () => {
  return (
    <div className="planner-container">
      <div className="planner-body">
        <div className="planner-header">
          <h1 className="planner-header-h1">Productivity Planner</h1>
        </div>
        <div className="planner-quote">
          <PlannerQuote />
        </div>
        <div className="planner-content">
          <div className="planner-items">
            <div className="planner-item">
              <textarea className="planner-textarea" type="text" required />
              <label className="planner-label">First Task</label>
            </div>
            <div className="planner-item-buttons">
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
            </div>
          </div>

          <div className="planner-items">
            <div className="planner-item">
              <textarea className="planner-textarea" type="text" required />
              <label className="planner-label">Second Task</label>
            </div>
            <div className="planner-item-buttons">
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
            </div>
          </div>
          <div className="planner-items">
            <div className="planner-item">
              <textarea className="planner-textarea" type="text" required />
              <label className="planner-label">Third Task</label>
            </div>
            <div className="planner-item-buttons">
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
            </div>
          </div>
          <div className="planner-items">
            <div className="planner-item">
              <textarea className="planner-textarea" type="text" required />
              <label className="planner-label">Fourth Task</label>
            </div>
            <div className="planner-item-buttons">
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
              <button className="planner-item-button">Button</button>
            </div>
          </div>
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
