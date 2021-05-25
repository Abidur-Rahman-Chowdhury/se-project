function addItem(coach_no, coach_type) {
  //  coach_no: String,
  // coach_type: String,
  var bus = {
    coach_no: coach_no.value,
    coach_type: coach_type.value,
  };
  console.log(bus);
  fetch("/bus", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bus),
  }).then((response) => {
    console.log(response);
    // location.reload();
  });
}
function getAllbus() {
  fetch("/bus")
    .then((response) => {
      return response.json();
      // location.reload();
    })
    .then((response) => {
      console.log(response);
      let table = document.getElementById("busList");
      for (let i = 0; i < response.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<tr>
                <td>${i + 1}</td>
                <td>${response[i].coach_no}</td>
                <td>${response[i].coach_type}</td>
                <td><a href="editarticle.html">Edit</a> || <a href="#">Delete</a></td>
              </tr>`;

        table.appendChild(tr);
      }
      // location.reload();
    });
}
getAllbus();
