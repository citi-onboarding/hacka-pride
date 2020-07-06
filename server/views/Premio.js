const keystone = require('keystone');
const Premio = keystone.list('Prêmios').model;
const handlers = {
  getPremio: function (req, res) {

    const objeto = {
      dataCiti: {},
      // dataParceiros: {},
    }

    Premio.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }

      objeto.dataCiti = data;

      res.status(200).send(objeto.dataCiti);
    });

  }
}
module.exports = handlers; 
