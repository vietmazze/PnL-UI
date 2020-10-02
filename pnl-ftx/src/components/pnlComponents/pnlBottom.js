import React, { useState, useEffect } from "react";
import "..Button/Button";
import "../Pnl.css";
function pnlBottom() {
  return (
    <div className="pnl-summary">
      <div className="pnl-items">
        <label className="pnl-items-title ">Exit PnL</label>
        <input
          type="number"
          className="pnl-box"
          defaultValue={userPnl.userGain}
        ></input>
      </div>
      <div className="pnl-items">
        <label className="pnl-items-title ">Stop PnL</label>
        <input
          type="number"
          className="pnl-box"
          defaultValue={userPnl.userLoss}
        ></input>
      </div>
      <div className="pnl-items">
        <label className="pnl-items-title ">Liquidation Price</label>
        <input type="number" className="pnl-box"></input>
      </div>
    </div>
  );
}

export default pnlBottom;
