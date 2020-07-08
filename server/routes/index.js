const path = require('path');
const cors = require('cors');
const router = require('express').Router();

const apiNotice = require('../views/Notice');
const apiCompany = require('../views/Company'); 
const apiHackaPride = require('../views/HackaPride');
const apiCollaborators = require('../views/Collaborators');
const apiPremio = require('../views/Premio');
const apiTicket = require('../views/Ticket');
const apiBanner = require('../views/Banner');
const mailController = require('../src/mailController');

exports = module.exports = function (app) {
  app.use(cors())
  
  app.get('/', function (req, res) {
		res.sendFile.join(__dirname, '../public/index.html')
  })
  
  app.get('/api/banner', apiBanner.getBanner)
  app.get('/api/ticket', apiTicket.getTicket)
  app.get('/api/company', apiCompany.getCompany)
  app.get('/api/notice', apiNotice.getNotice)
  app.get('/api/social', apiHackaPride.getHackaPride)
  app.get('/api/collaborators', apiCollaborators.getCollaborators)
  app.get('/api/goal', apiPremio.getPremio)
  app.post('/api/contato', mailController)

	app.get('*', (req, res) => {
    res.redirect('/');
  });
 
  //router.route('/form').post(mailController);

}
