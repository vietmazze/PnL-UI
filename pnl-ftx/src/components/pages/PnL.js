import React, { useState, useEffect } from "react";
import "../App.css";
import "../PnL.css";
import * as cal from "../data/pnlCalculator";
import "../Button";

import pnlBottom from "../pnlComponents/pnlBottom";

function Pnl() {
  return (
    <div>
      <>
        <pnlBottom />
      </>
    </div>
  );
}

export default Pnl;
