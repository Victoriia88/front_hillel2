const textField = document.getElementById("textField");
const sideDiv = document.getElementById("sideDiv");

textField.addEventListener("focus", () => {
  sideDiv.style.display = "block";
});

textField.addEventListener("blur", () => {
  sideDiv.style.display = "none";
});
