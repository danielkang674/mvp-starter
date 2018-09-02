const topFour = (data) => {
  return sizeAndCrust(data);
};

const sizeAndCrust = (data) => {
  let obj = {};
  for (let key in data) {
    if (!obj[data[key].size]) {
      obj[data[key].size] = 1;
    }
    if (!obj[data[key].crust]) {
      obj[data[key].crust] = 1;
    }
    else {
      obj[data[key].size]++;
      obj[data[key].crust]++;
    }
  }
  return obj;
}

module.exports.chooseWinner = { topFour };