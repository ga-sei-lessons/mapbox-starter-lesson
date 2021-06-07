// required packages
require('dotenv').config()
const express = require('express')
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const geocodingClient = mbxGeocoding( { accessToken: process.env.MAPBOX_TOKEN })
const layouts = require('express-ejs-layouts')

// configure app 
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// middlewares
app.use(layouts);
app.use(express.static(__dirname + '/public'))

// GET / -- show a form to search for a location
app.get('/', (req, res) => {
  res.render('home')
})

// GET /search -- geocode user search and render page with a map
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
