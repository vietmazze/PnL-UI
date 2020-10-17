import React from "react";
import { PlannerBody } from "../plannerComponents/PlannerBody";
import { PlannerPomo } from "../plannerComponents/PlannerPomo";

function Planner() {
  const mystyle = {
    backgroundColor: "#c1bdba",
    height: "100%",
  };

  return (
    <div style={mystyle}>
      <PlannerBody />
    </div>
  );
}

export default Planner;
