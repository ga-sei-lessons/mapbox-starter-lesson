require('dotenv').config();

let router = require('express').Router();

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
//const { response } = require('express');

const geocodingClient = mbxGeocoding( {accessToken: process.env.MAPBOX_TOKEN});

router.get('/', (req, res) =>{
  geocodingClient.forwardGeocode({ 
    query: `${req.query.city}, ${req.query.state}`
   })
   .send()
   .then(response => {
     let match = response.body.features[0];
    console.log(match);
     res.render('show', { match, mapkey: process.env.MAPBOX_TOKEN })
   })
});

module.exports = router;