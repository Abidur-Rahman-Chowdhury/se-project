module.exports = function (zapp, mongoose) {
  //create  a schema - this is like a blueprint
  var stationSchema = new mongoose.Schema({
    station_name: String,
    desc: String,
  });

  var Station = mongoose.model("Station", stationSchema);
  zapp.get("/station", function (req, res) {
    //get data from mongodb and pass it to view
    Station.find({}, function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  zapp.post("/station", function (req, res) {
    // get data from the view and add it to mongodb
    console.log(req.body);
    var newStation = Station(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  //   zapp.delete("/station/:item", function (req, res) {
  //     // delete requested item from mongodb
  //     Station.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (
  //       err,
  //       data
  //     ) {
  //       if (err) throw err;
  //       res.json(data);
  //     });
  //   });
};
