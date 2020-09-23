import React, { useState, useEffect } from "react";
import "../App.css";
import "./PnL.css";
import { stoplossCal } from "../data/pnlCalculator.js";
import { set } from "lodash";

function PnL() {
  const [entry, set_entry] = useState();
  const [stop_loss, set_stop_loss] = useState();
  const [take_profit, set_take_profit] = useState();
  const [current_price, set_current] = useState();
  const [pct_gain, set_pct_gain] = useState();
  const [pct_loss, set_pct_loss] = useState();
  const [amount_USD, set_amount_USD] = useState();
  const [amount, set_amount] = useState();

  const handleNumberChange = () => {};

  const handle_number_change = (type, e) => {
    var value = e.target.value;
    if (type === "entry") {
      set_entry(value);
    }
    if (type === "tp") {
      set_take_profit(value);
    }
    if (type === "stoploss") {
      set_stop_loss(value);
    }
    if (type === "amount") {
      set_amount(value);
    }
  };

  useEffect(() => {
    set_entry(entry);
    set_take_profit(take_profit);
    set_stop_loss(stop_loss);
    set_amount(amount);
  });

  // const [categories_one, setCategoriesOne] = useState([
  //   { name: "Entry", data: take_profit },
  //   { name: "Take Profit", data: take_profit },
  //   { name: "Stop Loss", data: take_profit },

  //   { name: "Take Profit", data: take_profit },
  // ]);
  // const [categories_two, setCategoriesTwo] = useState([
  //   { name: "Current Price", data: take_profit },
  //   { name: "% Gain", data: take_profit },
  //   { name: "% Loss", data: take_profit },

  //   { name: "Amount USD", data: take_profit },
  // ]);

  return (
    <div>
      <h1 className="pnl-title"> Profit and Loss Calculator</h1>
      <div className="pnl-container">
        <div className="pnl-menu">
          <div className="pnl-grid">
            {/* {categories_one.map((data, index) => (
              <div className="pnl-items" key={index}>
                <label className="pnl-items-title ">{data.name}</label>
                <input
                  type="text"
                  className="pnlBox"
                  onChange={handleNumberChange}
                  value={data.data}
                ></input>
              </div>
            ))} */}
            <div className="pnl-items">
              <label>Entry</label>
              <input
                type="text"
                className="pnlBox"
                value={entry}
                onChange={(e) => handle_number_change("entry", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Take Profit</label>
              <input
                type="text"
                className="pnlBox"
                value={take_profit}
                onChange={(e) => handle_number_change("tp", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Stoploss</label>
              <input
                type="text"
                className="pnlBox"
                value={stop_loss}
                onChange={(e) => handle_number_change("stoploss", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Amount</label>
              <input
                type="text"
                className="pnlBox"
                value={amount}
                onChange={(e) => handle_number_change("amount", e)}
              ></input>
            </div>
          </div>
          <div className="pnl-grid">
            {/* {categories_two.map((data, index) => (
              <div className="pnl-items" key={index}>
                <label className="pnl-items-title ">{data.name}</label>
                <input
                  type="text"
                  className="pnlBox"
                  onChange={handleNumberChange}
                  value={data.data}
                ></input>
              </div>
            ))} */}
            <div className="pnl-items">
              <label>Current Price</label>
              <input
                type="text"
                className="pnlBox"
                value={current_price}
                onChange={handleNumberChange}
              ></input>
            </div>
            <div className="pnl-items">
              <label>% Gain</label>
              <input
                type="text"
                className="pnlBox"
                value={pct_gain}
                onChange={handleNumberChange}
              ></input>
            </div>
            <div className="pnl-items">
              <label>% Loss</label>
              <input
                type="text"
                className="pnlBox"
                value={pct_loss}
                onChange={handleNumberChange}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Amount USD</label>
              <input
                type="text"
                className="pnlBox"
                value={amount_USD}
                onChange={handleNumberChange}
              ></input>
            </div>
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
