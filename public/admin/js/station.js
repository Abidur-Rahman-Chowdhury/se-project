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
  fetch("/station")
    .then((response) => {
      return response.json();
      // location.reload();
    })
    .then((response) => {
      console.log(response);
      // location.reload();
      let table = document.getElementById("stationList");
      for (let i = 0; i < response.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = ` <tr>
                <td>${i + 1}</td>
                <td>${response[i].station_name}</td>
                <td>${response[i].desc}</td>
                <td><a href="editarticle.html">Edit</a> || <a href="#">Delete</a></td>
              </tr>`;

        table.appendChild(tr);
      }
    });
}
getAllstation();
