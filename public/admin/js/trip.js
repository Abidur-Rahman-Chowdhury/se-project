function addTrip(from_station_id, to_station_id, deperture_time, fare) {
  var trip = {
    from_station_id: from_station_id.value,
    to_station_id: to_station_id.value,
    deperture_time: deperture_time.value,
    fare: fare.value,
  };
  fetch("/trip", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trip),
  }).then((response) => {
    location.reload();
  });
}
function getAlltrip() {
  fetch("/trip").then((response) => {
    console.log(response);
    // location.reload();
  });
}
getAlltrip();
