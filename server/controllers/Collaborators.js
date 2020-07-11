const keystone = require('keystone');

const Staff = keystone.list('Staff').model;
const Mentors = keystone.list('Mentors').model;

const handlers = {
  getCollaborators: async function (req, res) {

    const objeto = {}

    
     await  Staff.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }

      objeto.dataStaffs = data;
    });

    await Mentors.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
    
      objeto.dataMentors = data;
    }); 

    await res.status(200).send(objeto);
    }
}
module.exports = handlers;