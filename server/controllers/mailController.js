const dotenv = require('dotenv');
const mailServer = require('../utils/mailServer');

const sendMail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const body = `
      Nome: ${name}
      Email: ${email}
      Mensagem: ${message}`;

    await mailServer({
      destinationUser: process.env.EMAIL_CLIENT,
      subjectText: subject,
      textOption: body,
    });

    res.status(200).send('Email enviado');
  } catch (error) {
    res.status(500).send('Erro de conexão, tente novamente');
    console.log(error);
  }
};

module.exports = sendMail;