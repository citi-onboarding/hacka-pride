const path = require('path');
const cors = require('cors');

const apiTicket = require('../views/Ticket');
const apiNotice = require('../views/Notice');

exports = module.exports = function (app) {
  app.use(cors())
  
  app.get('/', function (req, res) {
		res.sendFile.join(__dirname, '../public/index.html')
  })
  
  app.get('/api/ticket', apiTicket.getTicket)
  app.get('/api/notice', apiNotice.getNotice)
  //replica a de cima

	app.get('*', (req, res) => {
    res.redirect('/');
  });
 
} 