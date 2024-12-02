//function for changing the text from English to French & vice versa
let englishVisible = true;
document.getElementById("language").addEventListener("click", function () {
  console.log("button pressed");
  // Get the button itself
  const button = this;

  const frenchList = document.querySelectorAll(".french");
  console.table(frenchList);
  const englishList = document.querySelectorAll(".english");
  console.table(englishList);

  // Toggle visibility between english list and french list
  englishVisible = !englishVisible;

  //Show all french elements
  if (englishVisible) {
    englishList.forEach((element) => {
      element.style.display = "inline";
      console.log("english displayed");
    });
    frenchList.forEach((element) => {
      element.style.display = "none";
      console.log("french not displayed");
    });
    button.textContent = "FR";
    //show all english elements
  } else {
    englishList.forEach((element) => {
      element.style.display = "none";
      console.log("English not displayed");
    });
    frenchList.forEach((element) => {
      element.style.display = "inline";
      console.log("French displayed");
    });
    button.textContent = "EN";
  }
});
