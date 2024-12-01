function selectBox() {
  let requiredField = document.querySelector("input[required]");
  if (requiredField && requiredField.value == "") {
    requiredField.focus();
  }
}
//function for changing the text from English to French & vice versa
//let isEnglishVisible = true;
document.getElementById("language").addEventListener("click", function () {
  console.log("button pressed");
  // Get the button itself
  const button = this;

  // Get all the ingredients
  const languages = document.querySelectorAll(".language");

  // Check the visibility of the precise list on the first ingredient
  const firstlanguage = languages[0];
  const englishList = firstlanguage.querySelector(".english");
  const englishVisible =
    window.getComputedStyle(englishList).display === "inline";

  languages.forEach((language) => {
    const frenchList = language.querySelector(".french");
    const englishList = language.querySelector(".english");

    // Toggle visibility between simple list and precise list
    if (englishVisible) {
      englishList.style.display = "none";
      frenchList.style.display = "inline";
    } else {
      englishList.style.display = "inline";
      frenchList.style.display = "none";
    }
  });

  /*  //set visibility based on the state
    englishList.style.display = isEnglishVisible ? "inline" : "none";
    frenchList.style.display = isEnglishVisible ? "none" : "inline";
  });*/

  // Update the button text
  button.textContent = isEnglishVisible ? "FR" : "EN";
});
