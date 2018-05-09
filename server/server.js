require('newrelic');
const Product = require('../db/index.js');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const redis = require('redis');
const bodyParser = require('body-parser');
const cors = require('cors');
const responseTime = require('response-time');
const port = 3001;

const app = express();
const redisClient = redis.createClient('redis://127.0.0.1:6379');

redisClient.on("error", function (err) {
  console.log(err);
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(responseTime());



app.get('/api/:id', (req, res) => {
  redisClient.get(`info-${req.params.id}`, (error, result) => {
    if (result) {
      res.status(200).json(JSON.parse(result));
    } else {
      Product.find({ projectID: req.params.id}, function (err, data) {
        if (err) {
          console.log('err: ', err);
          res.status(500).end();
        } else {
          console.log('data received');
          redisClient.setex(`info-${req.params.id}`, 60, JSON.stringify(data));
          res.status(200).json(data);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
