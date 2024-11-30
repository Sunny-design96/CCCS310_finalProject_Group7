function selectBox() {
  let requiredField = document.querySelector("input[required]");
  if (requiredField && requiredField.value == "") {
    requiredField.focus();
  }
}
