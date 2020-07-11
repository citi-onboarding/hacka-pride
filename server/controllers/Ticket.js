const keystone = require('keystone');
const Ticket = keystone.list('Link Ingresso').model;
const handlers = {
  getTicket: function (req, res) {

    Ticket.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;