const { model } = require('../database-mysql');

const deleteVotes = (cb) => {
  model.deletePT((err) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      model.deletePizzas((err) => {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          cb(null);
        }
      });
    }
  })
};

module.exports.deleteVotes = deleteVotes;