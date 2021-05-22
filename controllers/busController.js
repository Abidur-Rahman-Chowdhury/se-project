var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// database connection

mongoose.connect("mongodb://localhost:27017/exclusive");

//create  a schema - this is like a blueprint
var busSchema = new mongoose.Schema({
  coach_no: String,
  coach_type: String,
});

var Bus = mongoose.model("Bus", busSchema);

module.exports = function (zapp) {
  // zapp.get("/bus", function (req, res) {
  //   //get data from mongodb and pass it to view
  //   Bus.find({}, function (err, data) {
  //     if (err) throw err;
  //     res.render("bus", { buses: data });
  //   });
  // });

  zapp.post("/bus", urlencodedParser, function (req, res) {
    // get data from the view and add it to mongodb
    console.log(req);
    var newBus = Bus(req.body).save(function (err, data) {
      console.log(req);
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
