function addItem(item) {
  var todo = { item: item.value };
  fetch("/todo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((response) => {
    location.reload();
  });
}
