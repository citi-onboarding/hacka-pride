const keystone = require('keystone');
const Citi = keystone.list('Citi').model;
const Parceiros = keystone.list('Parceiros').model;

const handlers = {
  getCompany: async function (req, res) {
    
    const objeto = {}

  
    await Parceiros.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }

      objeto.dataParceiros = data;

    });

    await Citi.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
    
      objeto.dataCiti = data;
    
    });
    
    await res.status(200).send(objeto);
  
  }
}
module.exports = handlers; 
