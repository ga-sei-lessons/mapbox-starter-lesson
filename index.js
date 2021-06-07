// required packages
require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')

// configure app 
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// middlewares
app.use(layouts);
// app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding( { accessToken: process.env.MAPBOX_TOKEN });

// controllers
// app.use('/search', require('./controllers/search'))

// home route
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/search', (req, res) =>{
  geocodingClient.forwardGeocode({ 
    query: `${req.query.city}, ${req.query.state}`
   })
   .send()
   .then(response => {
     const match = response.body.features[0];
    console.log(match);
     res.render('show', { match, mapkey: process.env.MAPBOX_TOKEN })
   })
})

app.listen(PORT, () => console.log(`mapping on port: ${PORT} 🗺`))