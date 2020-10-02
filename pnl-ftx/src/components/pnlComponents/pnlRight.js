import React, { useState, useEffect } from "react";
import "..Button/Button";
import "../Pnl.css";

const pnlRight = () => {
  <div className="pnl-grid">
    <div className="pnl-items">
      <label className="pnl-items-title ">Market Price</label>
      <div className="pnl-box">
        <input
          type="number"
          className="pnl-input"
          value={userRequest.currentPrice}
          onChange={(e) => handleNumberChange("marketPrice", e)}
        ></input>
      </div>
    </div>
    <div className="pnl-items">
      <label className="pnl-items-title ">% Gain</label>
      <div className="pnl-box">
        <input
          className="pnl-input"
          type="number"
          value={userRequest.percentGain}
          onChange={(e) => handleNumberChange("percentGain", e)}
        ></input>
      </div>
    </div>
    <div className="pnl-items">
      <label className="pnl-items-title ">% Loss</label>
      <div className="pnl-box">
        <input
          type="number"
          className="pnl-input"
          value={userRequest.percentLoss}
          onChange={(e) => handleNumberChange("percentLoss", e)}
        ></input>
      </div>
    </div>
    <div className="pnl-items">
      <label className="pnl-items-title ">Amount USD</label>
      <div className="pnl-box">
        <input
          type="number"
          className="pnl-input"
          value={userRequest.amountUSD}
          onChange={(e) => handleNumberChange("amountUSD", e)}
        ></input>
      </div>
    </div>
  </div>;
};

export default pnlRight;
