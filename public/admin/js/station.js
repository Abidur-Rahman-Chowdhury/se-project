function addStation(station_name, desc) {
  var station = {
    station_name: station_name.value,
    desc: desc.value,
  };
  console.log(station);
  fetch("/station", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(station),
  }).then((response) => {
    location.reload();
  });
}
function getAllstation() {
  fetch("/station").then((response) => {
    console.log(response);
    // location.reload();
  });
}
getAllstation();
