import React, { useState, useEffect } from "react";
import "..Button/Button";
import "../Pnl.css";

const pnlLeft = () => {
  <div className="pnl-grid">
    <div className="pnl-items">
      <label className="pnl-items-title ">Entry</label>
      <div className="pnl-box">
        <input
          type="number"
          className="pnl-input"
          value={userRequest.entry}
          onChange={(e) => handleNumberChange("entry", e)}
        ></input>
      </div>
    </div>
    <div className="pnl-items">
      <label className="pnl-items-title ">Take Profit</label>
      <div className="pnl-box">
        <input
          type="number"
          className="pnl-input"
          value={userRequest.takeProfit}
          onChange={(e) => handleNumberChange("takeProfit", e)}
        ></input>
      </div>
      {orderType.buy & (userRequest.takeProfit < userRequest.marketPrice) ? (
        <p className="pnl-warning"> Should be greater than market</p>
      ) : null}
      {orderType.sell & (userRequest.takeProfit > userRequest.marketPrice) ? (
        <p className="pnl-warning">Should be lower than market</p>
      ) : null}
    </div>
    <div className="pnl-items">
      <label className="pnl-items-title ">Stoploss</label>
      <div className="pnl-box">
        <input
          type="number"
          className="pnl-input"
          value={userRequest.stopLoss}
          onChange={(e) => handleNumberChange("stopLoss", e)}
        ></input>
      </div>
      {orderType.buy & (userRequest.stopLoss > userRequest.marketPrice) ? (
        <p className="pnl-warning"> Should be lower than market</p>
      ) : null}
      {orderType.sell & (userRequest.stopLoss < userRequest.marketPrice) ? (
        <p className="pnl-warning">Should be greater than market</p>
      ) : null}
    </div>
    <div className="pnl-items">
      <label className="pnl-items-title ">Amount</label>
      <div className="pnl-box">
        <input
          type="number"
          className="pnl-input"
          value={userRequest.amount}
          onChange={(e) => handleNumberChange("amount", e)}
        ></input>
      </div>
    </div>
  </div>;
};

export default pnlLeft;
