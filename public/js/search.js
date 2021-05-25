function viewTrip() {
  fetch("/trip")
    .then((response) => {
      return response.json();
      // location.reload();
    })
    .then((response) => {
      console.log(response);
      // location.reload();
      let viewTrip = document.getElementById("viewTrips");
      var today = new Date();

      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      for (let i = 0; i < response.length; i++) {
        viewTrip.innerHTML += `<br>
                <div class="view-card">
                    <div class="part-1">${response[i].from_station_id}-To-${response[i].to_station_id}</div>
                    <div class="part-2">Departure <br>
                        ${response[i].deperture_time}<br>
                        ${date}</div>
                    <div class="part-3">Boarding <br>
                        ${response[i].from_station_id}<br> <br>
                        Destination <br>
                        <span class="bold">${response[i].to_station_id}</span>
                    </div>
                    <div class="part-4">Business <br>
                        BDT <br> <br>
                        <span class="Taka">${response[i].fare}</span>
                    </div>
                    <div class="part-5"><a href="seatplan.html" class="view-btn">
                            <ion-icon class="seat-icon" name="reorder-three"></ion-icon>View Seats
                        </a></div>
                </div>
`;
      }
    });
}
viewTrip();
