const path = require('path');
const cors = require('cors');

const apiNotice = require('../views/Notice');
const apiBanner = require('../views/Banner');
const apiPremio = require('../views/Premio');
const apiTicket = require('../views/Ticket');
const apiHackaPride = require('../views/HackaPride');
const apiCiti = require('../views/Citi');
const apiParceiros = require('../views/Parceiros');



exports = module.exports = function (app) {
  app.use(cors())
  
  app.get('/', function (req, res) {
		res.sendFile.join(__dirname, '../public/index.html')
  })
  
  
  app.get('/api/notice', apiNotice.getNotice)
  app.get('/api/banner', apiBanner.getBanner)
  app.get('/api/ticket', apiTicket.getTicket)
  app.get('/api/goal', apiPremio.getPremio)
  app.get('/api/social', apiHackaPride.getHackaPride)
  app.get('/api/company', apiCiti.getCiti)
  app.get('/api/company', apiParceiros.getParceiros)
  //replica a de cima

	app.get('*', (req, res) => {
    res.redirect('/');
  });
 
}