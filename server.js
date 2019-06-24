const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const database = require('./config/keys').mongoURI;

mongoose.connect(database)
    .then( () => console.log('MongoDB is up and running...'))
        .catch(err => console.log(err));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));