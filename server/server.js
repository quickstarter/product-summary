require('newrelic');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const redis = require('redis');
  redisClient = redis.createClient('redis://127.0.0.1:6379');
const bodyParser = require('body-parser');
const Product = require('../db/index.js');
const cors = require('cors');
const app = express();
const responseTime = require('response-time');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(responseTime());


redisClient.on("error", function (err) {
  console.log(err);
});


app.get('/api/:id', (req, res) => {

  // console.log(req, 'GET :: server');

  // let db = mongoose.connect('localhost:27017/main');
  redisClient.get(`info-${req.params.id}`, (error, result) => {
    if (result) {
      res.status(200).json(data);
    } else {
      Product.find({ projectID: req.params.id}, function (err, data) {
        if (err) {
          console.log('err: ', err);
          res.status(400).end();
        } else {
          console.log('data received');
          res.status(200).json(data);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
