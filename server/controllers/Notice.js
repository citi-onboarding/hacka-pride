const keystone = require('keystone');
const Notice = keystone.list('Link para o edital').model;
const handlers = {
  getNotice: function (req, res) {

    Notice.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers; 
