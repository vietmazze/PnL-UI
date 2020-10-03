import React, { useState, useEffect } from "react";
import "../plannerComponents/plannerBody.css";

export const PlannerBody = () => {
  return (
    <div className="planner-container">
      <div className="planner-body">
        <div className="planner-header">Productivity Planner</div>
        <div className="planner-quote">quote</div>
        <div className="planner-content">content</div>
        <div className="planner-note">notes</div>
      </div>
    </div>
  );
};
