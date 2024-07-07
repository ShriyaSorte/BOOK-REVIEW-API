const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const api = require('./routes/api');
const port = 6000;
const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_URL);
mongoose.connection.once('open', ()=>{
	console.log("Connected to Database");
});

app.use('/api',api);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});