const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes');

const app = express();

dotenv.config();
app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Ready at port ${process.env.PORT || 3001}`);
});