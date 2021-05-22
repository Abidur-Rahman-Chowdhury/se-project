const busContoller = require("./controllers/busController");
const stationContoller = require("./controllers/stationController");
const tripContoller = require("./controllers/tripController");

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static(path.join(__dirname, "public")));
busContoller(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
