import React, { useState, useEffect } from "react";
import "../App.css";
import "./PnL.css";

function PnL() {
  return (
    <div>
      <h1 className="pnl-title"> Profit and Loss Calculator</h1>
      <div className="pnl-container">
        <div className="pnl-menu">
          <div className="pnl-grid">
            <div className="pnl-items">
              <label>Entry</label>
              <input type="text" className="pnlBox"></input>
            </div>
            <div className="pnl-items">
              <label>Take Profit</label>
              <input type="text" className="pnlBox"></input>
            </div>
            <div className="pnl-items">
              <label>Stoploss</label>
              <input type="text" className="pnlBox"></input>
            </div>
            <div className="pnl-items">
              <label>Amount</label>
              <input type="text" className="pnlBox"></input>
            </div>
          </div>
          <div className="pnl-grid">
            <div className="pnl-items">
              <label>Current Price</label>
              <input type="text" className="pnlBox"></input>
            </div>
            <div className="pnl-items">
              <label>% Gain</label>
              <input type="text" className="pnlBox"></input>
            </div>
            <div className="pnl-items">
              <label>% Loss</label>
              <input type="text" className="pnlBox"></input>
            </div>
            <div className="pnl-items">
              <label>Amount USD</label>
              <input type="text" className="pnlBox"></input>
            </div>
          </div>
        </div>
        <div className="pnl-slider">Slider</div>
        <div className="pnl-summary">
          <div className="pnl-items">
            <label>Exit PnL</label>
            <input type="text" className="pnlBox"></input>
          </div>
          <div className="pnl-items">
            <label>Stop PnL</label>
            <input type="text" className="pnlBox"></input>
          </div>
          <div className="pnl-items">
            <label>Liquidation Price</label>
            <input type="text" className="pnlBox"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PnL;
