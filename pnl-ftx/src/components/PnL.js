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

  const [orderType, setOrderType] = useState({
    buy: true,
    sell: false,
  });

  const handleNumberChange = (type, e) => {
    var value = e.target.value;

    setUserRequest({ ...userRequest, [type]: value ? parseFloat(value) : "" });
  };

  /////////////////////////////////////
  // - ORDER CHANGE
  // * Change the CSS styling when user click on buy/sell button
  /////////////////////////////////////
  const orderClick = (type, e) => {
    if (type === "sell") {
      setOrderType({ buy: false, sell: true });
    } else {
      setOrderType({ buy: true, sell: false });
    }
  };

  let orderBuyStyle = orderType.buy ? "pnl-order-buy" : "pnl-order-button";
  let orderSellStyle = orderType.sell ? "pnl-order-sell" : " pnl-order-button";
  ///////////////////////////////////////
  //  - PERCENT GAIN & LOSS
  //  * setState for profit and stoploss percentage when user input entry,stoploss and tp
  /////////////////////////////////////////
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

  /////////////////////////////////////
  //  - AMOUNT IN USD
  //  *setState for amount in USD when user put in amount and marketPrice
  /////////////////////////////////////
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

  /////////////////////////////////////////
  // -GAIN AND LOSS PNL
  // *setState for EXIT pnl and Stop PNL after percentGain and percentLoss calculated
  /////////////////////////////////////////
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRequest.amountUSD, userRequest.percentGain, userRequest.percentLoss]);

  ///////////////////////////////////
  // -SLIDER VALUE

  const amountChange = (e) => {
    setUserRequest({
      ...userRequest,
      amount: parseFloat(e.target.value),
    });
  };

  // useEffect(() => {
  //   amountChange();
  // }, []);

  window.addEventListener("pnl-slider-input", amountChange);
  //////////////////////////////////

  return (
    <div>
      <h1 className="pnl-title"> Profit and Loss Calculator</h1>
      <div className="pnl-container">
        <div className="pnl-body">
          {/* Top of the page: Buy/Sell Button */}
          <div className="pnl-order">
            <button
              className={orderBuyStyle}
              onClick={(e) => orderClick("buy", e)}
              defaultValue="Buy"
            >
              Buy
            </button>
            <button
              className={orderSellStyle}
              onClick={(e) => orderClick("sell", e)}
              defaultValue="Sell"
            >
              Sell
            </button>
          </div>

          <div className="pnl-menu">
            {/* Left side of the page: Entry/ TP / SL */}
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
                {orderType.buy &
                (userRequest.takeProfit < userRequest.marketPrice) ? (
                  <p className="pnl-warning"> Should be greater than market</p>
                ) : null}
                {orderType.sell &
                (userRequest.takeProfit > userRequest.marketPrice) ? (
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
                {orderType.buy &
                (userRequest.stopLoss > userRequest.marketPrice) ? (
                  <p className="pnl-warning"> Should be lower than market</p>
                ) : null}
                {orderType.sell &
                (userRequest.stopLoss < userRequest.marketPrice) ? (
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
            </div>
            {/* Right side of the page : Market Price/ % Gain/ % Loss */}
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
            </div>
          </div>
          <div className="pnl-slider">
            <input
              type="range"
              min="0"
              max={parseFloat(userRequest.marketPrice) > 300 ? "100" : "10000"}
              step={parseFloat(userRequest.marketPrice) > 300 ? "0.01" : "1"}
              defaultValue="0"
              onChange={amountChange}
              className="pnl-slider-input"
            />
          </div>
          {/* Bottom of the page: EXIT/ STOP / LIQUIDATION */}
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
        </div>
      </div>
    </div>
  );
}

export default PnL;
