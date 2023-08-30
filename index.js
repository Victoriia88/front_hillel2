document.getElementById("generateTable").addEventListener("click", function () {
  let table = document.getElementById("numberTable");

  table.innerHTML = "";

  let num = 1;
  for (let i = 0; i < 10; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < 10; j++) {
      let cell = row.insertCell(j);
      cell.innerHTML = num++;
    }
  }
});
