const popularVote = (data) => {
  let result = reduceOptions(data);
  let toppingsArr = [];
  let topFour = [];
  for (let topping in result.toppings) {
    let tempObj = { value: result.toppings[topping], topping: topping };
    toppingsArr.push(tempObj);
  }
  toppingsArr.sort((a, b) => {
    return b.value - a.value;
  });
  let length = toppingsArr.length > 4 ? 4 : toppingsArr.length;
  for (let i = 0; i < length; i++) {
    topFour.push(toppingsArr[i].topping);
  }
  result.toppings = topFour
  return result;
};

const reduceOptions = (data) => {
  let getSum = sumOptions(data);
  let sizeCrustCompared = compareSizeCrust(getSum);
  return sizeCrustCompared;
};

const sumOptions = (data) => {
  let sum = { size: {}, crust: {}, toppings: {} };
  let tempToppings = [];
  // sum of size and crust
  for (let key in data) {
    let incrementSize = true;
    let incrementCrust = true;
    tempToppings = tempToppings.concat(data[key].toppings);
    if (!sum.size[data[key].size]) {
      sum.size[data[key].size] = 1;
      incrementSize = false;
    }
    if (!sum.crust[data[key].crust]) {
      sum.crust[data[key].crust] = 1;
      incrementCrust = false;
    }
    if (incrementSize) sum.size[data[key].size]++;
    if (incrementCrust) sum.crust[data[key].crust]++;
  }
  // sum toppings
  for (let i = 0; i < tempToppings.length; i++) {
    if (!sum.toppings[tempToppings[i]]) {
      sum.toppings[tempToppings[i]] = 1;
    } else {
      sum.toppings[tempToppings[i]]++;
    }
  }
  return sum;
};

const compareSizeCrust = (sum) => {
  // compare size and crust but not toppings
  let result = { toppings: sum.toppings };
  for (let key in sum) {
    if (key !== 'toppings') {
      let counter = 0;
      for (let option in sum[key]) {
        if (sum[key][option] > counter) {
          counter = sum[key][option];
          result[key] = option;
        }
      }
    }
  }
  return result;
};

module.exports.chooseWinner = { popularVote };