require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var BreweryDb = require("brewerydb-node");
var favorite = require("../db/index.js");
var brewdb = new BreweryDb(process.env.BREWERY_DB_API);
var app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.post("/favorite", function(req, res, next) {
  console.log(req.body);
  var fav = new favorite(req.body);
  fav.save(function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(201, fav);
  });
});

app.delete("/deleteFav", (req, res) => {
  favorite.deleteOne(req.body, err => {
    console.log(err);
  });
});

app.get("/favorite", function(req, res, next) {
  var fav = new favorite(req.body);
  favorite.find({}, (err, docs) => {
    res.send(docs);
  });
});

app.get("/beer/:abv/:withBrew", (req, res) => {
  brewdb.beer.find(
    { abv: req.params.abv, withBreweries: req.params.withBrew },
    (err, data) => {
      res.send(data);
    }
  );
});

app.get("/breweries/:q/:withLoc", (req, res) => {
  brewdb.search.breweries(
    { q: req.params.q, withLocations: req.params.withLoc },
    (err, data) => {
      res.send(data);
    }
  );
});

app.get("/search/:q/:withBrew", (req, res) => {
  brewdb.search.beers(
    { q: req.params.q, withBreweries: req.params.withBrew },
    (err, data) => {
      if (err) throw err;
      res.status(200).send(data);
    }
  );
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
