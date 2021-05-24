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
  fetch("/bus").then((response) => {
    console.log(response);
    // location.reload();
  });
}
getAllbus();
