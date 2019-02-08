const values = [["PENNY", 0.01],
 ["NICKEL", 0.05],
 ["DIME", 0.1],
 ["QUARTER", 0.25],
 ["ONE", 1],
 ["FIVE", 5],
 ["TEN", 10],
 ["TWENTY", 20],
 ["ONE HUNDRED", 100]];

function round(num) {
  return Math.round((num) * 100) / 100;
}

function copyArray(arr) {
  let arrCopy = [];

  for(let i = 0; i < arr.length; i++) {
    arrCopy[i] = arr[i].slice();
  }

  return arrCopy;
}

function checkCashRegister(price, cash, cid) {
  let changeScheme = {
    status: "OPEN",
    change: []
  };
  let cidCopy = copyArray(cid);
  let amountDue = cash - price;
  let amountLeftInDrawer = 0;

  for(let i = cidCopy.length - 1; i >= 0; i--) {
    let amountUsed = 0;

    while(round(amountDue - values[i][1]) >= 0 && cidCopy[i][1] > 0) {
      amountDue = round(amountDue - values[i][1]);
      cidCopy[i][1] = round(cidCopy[i][1] - values[i][1]);
      amountUsed = amountUsed + values[i][1];
    }

    amountLeftInDrawer = amountLeftInDrawer + cidCopy[i][1];
    if(amountUsed > 0) {
      changeScheme.change.push([values[i][0], amountUsed]);
    }
  }
  
  if(amountDue > 0) {
    changeScheme.status = "INSUFFICIENT_FUNDS";
    changeScheme.change = [];
  } else if(amountLeftInDrawer == 0) {
    changeScheme.status = "CLOSED";
    changeScheme.change = cid;
  }

  return changeScheme;
}

const changeScheme = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log("Status: " + changeScheme.status);
console.log("Change: " + changeScheme.change);
