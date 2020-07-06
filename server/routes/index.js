const path = require('path');
const cors = require('cors');

const apiNotice = require('../views/Notice');
const apiCompany = require('../views/Company'); 
const apiHackaPride = require('../views/HackaPride');
const apiCollaborators = require('../views/Collaborators');
const apiPremio = require('../views/Premio');

exports = module.exports = function (app) {
  app.use(cors())
  
  app.get('/', function (req, res) {
		res.sendFile.join(__dirname, '../public/index.html')
  })
  
  
  app.get('/api/company', apiCompany.getCompany)
  app.get('/api/notice', apiNotice.getNotice)
  app.get('/api/social', apiHackaPride.getHackaPride)
  app.get('/api/collaborators', apiCollaborators.getCollaborators)
  app.get('/api/goal', apiPremio.getPremio)

	app.get('*', (req, res) => {
    res.redirect('/');
  });
 
}
