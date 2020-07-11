const keystone = require('keystone');
const HackaPride = keystone.list('HackaPride').model;
const handlers = {
  getHackaPride: function (req, res) {

    HackaPride.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers; 
