import React from "react";
import { PlannerBody } from "../plannerComponents/plannerBody";
import { PlannerPomo } from "../plannerComponents/plannerPomo";

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
