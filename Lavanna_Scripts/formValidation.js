//Form validation
//On submit event of the form complete validation of fields
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const contactForm = document.forms.contactForm;

  //validate the user name and email are not empty
  let userName = contactForm.user_name.value;
  let email = contactForm.user_email.value;
  if (userName === "") {
    window.alert(
      "Name field must be filled out. Le champ nom doit être rempli."
    );
    //Add an alert to inform the user they must enter their data
    //focus on the empty field
    window.setTimeout(() => element.focus(), 0);
    document.getElementById("user_name").focus();
  } else if (email === "") {
    //Add an alert to inform the user they must enter their data
    //focus on the empty field
    window.alert(
      "Email field must be filled out. Le champ e-mail doit être rempli."
    );
    window.setTimeout(() => element.focus(), 0);
    document.getElementById("mail").focus();
  } else {
    //Message informing the user their information has been successfully submitted
    window.alert("Thank you for contacting us!");
  }
});
