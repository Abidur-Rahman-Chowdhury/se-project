module.exports = function (zapp, mongoose) {
  //create  a schema - this is like a blueprint
  var busSchema = new mongoose.Schema({
    coach_no: String,
    coach_type: String,
  });

  var Bus = mongoose.model("Bus", busSchema);
  zapp.get("/bus", function (req, res) {
    //get data from mongodb and pass it to view
    Bus.find({}, function (err, data) {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });

  zapp.post("/bus", function (req, res) {
    // get data from the view and add it to mongodb
    console.log(req.body);
    var newBus = Bus(req.body).save(function (err, data) {
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
