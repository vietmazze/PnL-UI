import React, { useState, useEffect } from "react";
import "../App.css";
import "./PnL.css";

function PnL() {
  return (
    <div className="pnl-container">
      <div className="pnl-menu">
        <header className="pnl-buy-sell">Calculator</header>
        <div className="pnl-grid">
          <div className="pnl-entry">Entry</div>
          <div className="pnl-takeProfit">Take Profit</div>
          <div className="pnl-stoploss">Stoploss</div>
        </div>
      </div>
    </div>
  );
}

export default PnL;
