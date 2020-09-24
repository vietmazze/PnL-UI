import React, { useState, useEffect } from "react";
import "../App.css";
import "./PnL.css";
import * as cal from "../data/pnlCalculator";

function PnL() {
  const [userRequest, setUserRequest] = useState({
    entry: "",
    stopLoss: "",
    takeProfit: "",
    marketPrice: "",
    percentGain: "",
    percentLoss: "",
    amountUSD: "",
    amount: "",
  });

  const [userPnl, setUserPnl] = useState({
    userGain: "",
    userLoss: "",
    userLiquidation: "",
  });

  const handleNumberChange = (type, e) => {
    var value = e.target.value;

    setUserRequest({ ...userRequest, [type]: value ? parseFloat(value) : "" });
  };

  /*
    - PERCENT GAIN & LOSS 
    * setState for profit and stoploss percentage when user input entry,stoploss and tp
  */
  useEffect(() => {
    var curProfit;
    var curStoploss;
    if (userRequest.entry !== "" && userRequest.takeProfit !== "") {
      curProfit = cal.profitCal(userRequest.entry, userRequest.takeProfit);
    }

    if (userRequest.entry !== "" && userRequest.stopLoss !== "") {
      curStoploss = cal.stoplossCal(userRequest.entry, userRequest.stopLoss);
    }

    setUserRequest({
      ...userRequest,
      percentGain: curProfit ? parseFloat(curProfit) : "",
      percentLoss: curStoploss ? parseFloat(curStoploss) : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRequest.entry, userRequest.takeProfit, userRequest.stopLoss]);

  /*
    - AMOUNT IN USD
    *setState for amount in USD when user put in amount and marketPrice
  */
  useEffect(() => {
    var amount;
    if (userRequest.amount !== "" && userRequest.marketPrice !== "") {
      amount = cal.amountInUSD(userRequest.amount, userRequest.marketPrice);
    }
    setUserRequest({
      ...userRequest,
      amountUSD: amount ? parseFloat(amount) : "",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRequest.amount, userRequest.marketPrice]);

  /* 
   -GAIN AND LOSS PNL 
   *setState for EXIT pnl and Stop PNL after percentGain and percentLoss calculated
  */

  useEffect(() => {
    var gainPnl;
    var stopPnl;
    if (userRequest.amountUSD !== "" && userRequest.percentGain !== "") {
      gainPnl = cal.gainPNL(userRequest.amountUSD, userRequest.percentGain);
    }

    if (userRequest.amountUSD !== "" && userRequest.percentLoss !== "") {
      stopPnl = cal.stopPNL(userRequest.amountUSD, userRequest.percentLoss);
    }
    setUserPnl({
      ...userPnl,
      userGain: gainPnl ? parseFloat(gainPnl) : "",
      userLoss: stopPnl ? parseFloat(stopPnl) : "",
    });

    console.log(userPnl.userLoss);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRequest.amountUSD, userRequest.percentGain, userRequest.percentLoss]);

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
                type="number"
                className="pnlBox"
                value={userRequest.entry}
                onChange={(e) => handleNumberChange("entry", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Take Profit</label>
              <input
                type="number"
                className="pnlBox"
                value={userRequest.takeProfit}
                onChange={(e) => handleNumberChange("takeProfit", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Stoploss</label>
              <input
                type="number"
                className="pnlBox"
                value={userRequest.stopLoss}
                onChange={(e) => handleNumberChange("stopLoss", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Amount</label>
              <input
                type="number"
                className="pnlBox"
                value={userRequest.amount}
                onChange={(e) => handleNumberChange("amount", e)}
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
              <label>Market Price</label>
              <input
                type="number"
                className="pnlBox"
                value={userRequest.currentPrice}
                onChange={(e) => handleNumberChange("marketPrice", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>% Gain</label>
              <input
                type="number"
                className="pnlBox"
                value={userRequest.percentGain}
                onChange={(e) => handleNumberChange("percentGain", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>% Loss</label>
              <input
                type="number"
                className="pnlBox"
                value={userRequest.percentLoss}
                onChange={(e) => handleNumberChange("percentLoss", e)}
              ></input>
            </div>
            <div className="pnl-items">
              <label>Amount USD</label>
              <input
                type="number"
                className="pnlBox"
                value={userRequest.amountUSD}
                onChange={(e) => handleNumberChange("amountUSD", e)}
              ></input>
            </div>
          </div>
        </div>
        <div className="pnl-slider">Slider</div>
        <div className="pnl-summary">
          <div className="pnl-items">
            <label className="pnl-items-title ">Exit PnL</label>
            <input
              type="number"
              className="pnlBox"
              value={userPnl.userGain}
            ></input>
          </div>
          <div className="pnl-items">
            <label className="pnl-items-title ">Stop PnL</label>
            <input
              type="number"
              className="pnlBox"
              value={userPnl.userLoss}
            ></input>
          </div>
          <div className="pnl-items">
            <label className="pnl-items-title ">Liquidation Price</label>
            <input type="number" className="pnlBox"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PnL;
