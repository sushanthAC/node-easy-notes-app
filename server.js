const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./configs/database.config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => {
  console.log('successfully Connected');
}).catch(err => {
  console.log('something went wrong', err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json({ 'message': 'welcome to note me..!' });
});

require('./app/routes/note.route.js')(app);

app.listen('3000', () => {
  console.log('server listing to 3000 port');
});