var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// database connection

mongoose.connect("mongodb://localhost:27017/bus");

//create  a schema - this is like a blueprint
var tripSchema = new mongoose.Schema({
  from_station_id: String,
  to_station_id: String,
  deperture_time: String,
  fare: String,
});

var Trip = mongoose.model("Trip", tripSchema);

module.exports = function (zapp) {
  // zapp.get("/trip", function (req, res) {
  //   //get data from mongodb and pass it to view
  //   Trip.find({}, function (err, data) {
  //     if (err) throw err;
  //     res.render("bus", { buses: data });
  //   });
  // });

  zapp.post("/bus", urlencodedParser, function (req, res) {
    // get data from the view and add it to mongodb
    console.log(req);
    var newTrip = Trip(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  //   zapp.delete("/bus/:item", function (req, res) {
  //     // delete requested item from mongodb
  //     Bus.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (
  //       err,
  //       data
  //     ) {
  //       if (err) throw err;
  //       res.json(data);
  //     });
  //   });
};
