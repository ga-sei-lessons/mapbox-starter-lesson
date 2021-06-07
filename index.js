// required packages
require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');

// configure app 
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

// middlewares
app.use(layouts);
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

// controllers
app.use('/search', require('./controllers/search'));

// home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => console.log(`mapping on port: ${port}`));