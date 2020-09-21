export const stoplossCal = (entry, stoploss) => {
  return (Math.abs(entry - stoploss) / entry) * 100;
};

export const profitCal = (entry, tp) => {
  return (Math.abs(entry - tp) / entry) * 100;
};

export const amountInUSD = (amount, marketPrice) => {
  return amount * marketPrice;
};

export const liquidationPrice = () => {};
