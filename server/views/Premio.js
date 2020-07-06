const keystone = require('keystone');
const Premio = keystone.list('Prêmios').model;
const handlers = {
  getPremio: function (req, res) {

    Premio.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers; 
