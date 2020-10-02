import React, { useState, useEffect } from "react";
import "..Button/Button";
import "../Pnl.css";

function pnlSlider() {
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
  </div>;
}

export default pnlSlider;
