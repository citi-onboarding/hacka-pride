const cors = require('cors');
const path = require('path');

const apiNotice = require('../views/Notice');
const apiCiti = require('../views/Citi');
const apiParceiros = require('../views/Parceiros');
const apiHackaPride = require('../views/HackaPride');
const apiPremio = require('../views/Premio');

exports = module.exports = function (app) {
  app.use(cors())
  
  app.get('/', function (req, res) {
		res.sendFile.join(__dirname, '../public/index.html')
  })
  
  
  app.get('/api/company', apiCiti.getCiti)
  app.get('/api/company', apiParceiros.getParceiros)

  app.get('/api/notice', apiNotice.getNotice)
  app.get('/api/social', apiHackaPride.getHackaPride)
  app.get('/api/goal', apiPremio.getPremio)
  //replica a de cima

	app.get('*', (req, res) => {
    res.redirect('/');
  });
 
} 

