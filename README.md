# Mapbox lesson

## Links

mapbox API website:

https://www.mapbox.com/

mapbox on npm:

https://www.npmjs.com/package/mapbox

geocoding with mapbox:

https://docs.mapbox.com/help/getting-started/geocoding/#how-geocoding-works

mapbox gl js website:

https://www.mapbox.com/mapbox-gljs

mapbox gl js api:

https://docs.mapbox.com/mapbox-gl-js/api/

geojson info:

https://geojson.org/

mapbox keys:

https://account.mapbox.com/access-tokens/

solution repo:

https://github.com/weston-bailey/mapbox-starter-lesson

gitbook notes:

https://gawdiseattle.gitbook.io/wdi/05-node-express/additional-topics/geocode-mapbox

map css example (needs to inherit):

https://plnkr.co/edit/qjIAiud3aUF11iQPDKj0?p=preview&preview


## code snippets

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.css" rel="stylesheet" />
```

## Steps

* talk about mapbox + geocoding
* talk about gl js
* talk about needing api keys
* describe app -- search for location and place on a map

---

* install dependancies (look at package.json)
* make all files/folders
* build express server and stub routes (console.log req qeury in search)
    * talk about APIs being a model in the MVC scheme 
* test with postman
* sign up for api keys
* import api key and and mbxgeocoading 
* write search route
* test with postman

---

* make views -- start with layout
    * link up the stylesheet 
* make form (home.ejs)
* make search.ejs
    * start with basic data
* add mapbox
    * add css to center it
* add mapbox icon (slack it out)
* add geojson
* add features forEach

###### tags: `lessons`