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
  fetch("/trip")
    .then((response) => {
      return response.json();
      // location.reload();
    })
    .then((response) => {
      console.log(response);
      // location.reload();
      let table = document.getElementById("tripList");
      for (let i = 0; i < response.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = ` <tr>
                <td>${i + 1}</td>
                <td>${response[i].from_station_id}</td>
                <td>${response[i].to_station_id}</td>
                <td>${response[i].deperture_time}</td>
                <td>${response[i].fare}</td>
                <td><a href="editarticle.html">Edit</a> || <a href="#">Delete</a></td>
              </tr>`;

        table.appendChild(tr);
      }
    });
}
getAlltrip();
