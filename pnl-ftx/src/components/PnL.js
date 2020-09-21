import React, { useState, useEffect } from "react";
import "../App.css";
import "./PnL.css";
import { stoplossCal } from "../data/pnlCalculator.js";

function PnL() {
  const [take_profit, set_take_profit] = useState();
  const [take_profitPCT, set_take_profitPCT] = useState();
  const handleNumberChange = (e) => {};

  const [categories_one, setCategoriesOne] = useState([
    ["Entry", ""],
    ["Take Profit", take_profit],
    ["Stoploss", ""],
    ["Amount", ""],
  ]);
  const [categories_two, setCategoriesTwo] = useState([
    ["Current Price", ""],
    ["% Gain", take_profitPCT],
    ["% Loss", ""],
    ["Amount USD", ""],
  ]);

  return (
    <div>
      <h1 className="pnl-title"> Profit and Loss Calculator</h1>
      <div className="pnl-container">
        <div className="pnl-menu">
          <div className="pnl-grid">
            {categories_one.map((data) => (
              <div className="pnl-items">
                <label className="pnl-items-title ">{data[0]}</label>
                <input
                  type="text"
                  className="pnlBox"
                  onChange={handleNumberChange}
                  value={data[1]}
                ></input>
              </div>
            ))}
          </div>
          <div className="pnl-grid">
            {categories_two.map((data) => (
              <div className="pnl-items">
                <label className="pnl-items-title ">{data[0]}</label>
                <input
                  type="text"
                  className="pnlBox"
                  onChange={handleNumberChange}
                  value={data[1]}
                ></input>
              </div>
            ))}
          </div>
        </div>
        <div className="pnl-slider">Slider</div>
        <div className="pnl-summary">
          <div className="pnl-items">
            <label className="pnl-items-title ">Exit PnL</label>
            <input type="text" className="pnlBox"></input>
          </div>
          <div className="pnl-items">
            <label className="pnl-items-title ">Stop PnL</label>
            <input type="text" className="pnlBox"></input>
          </div>
          <div className="pnl-items">
            <label className="pnl-items-title ">Liquidation Price</label>
            <input type="text" className="pnlBox"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PnL;
