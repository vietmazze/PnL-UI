import { round } from "lodash";
export const stoplossCal = (entry, stoploss) => {
  return round((Math.abs(entry - stoploss) / entry) * 100, 2);
};

export const profitCal = (entry, tp) => {
  return round((Math.abs(entry - tp) / entry) * 100, 2);
};

export const amountInUSD = (amount, marketPrice) => {
  return round(amount * marketPrice, 4);
};

// export const liquidationPrice = () => {
//   var positionSize = amount * marketPrice;
//   var marginFraction = collateral / positionSize;
//   var maintenanceMargin = maintenanceMargin;
//   var priceLiquidated = ;
//   return priceLiquidated;
// };

export const gainPNL = (amountUSD, percentGain) => {
  return round(amountUSD * (percentGain / 100), 3);
};

export const stopPNL = (amountUSD, percentLoss) => {
  return round(amountUSD * (percentLoss / 100), 3);
};

// export default pnlCalculator = () => {
//   stopLossCal = (entry, stoploss) => {
//     return (Math.abs(entry - stoploss) / entry) * 100;
//   };

//   profitCal = (entry, tp) => {
//     return (Math.abs(entry - tp) / entry) * 100;
//   };

//   amountInUSD = (amount, marketPrice) => {
//     return amount * marketPrice;
//   };

//   liquidationPrice = () => {};
// };
