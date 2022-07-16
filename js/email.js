const emailPattern = /\S+@\S+\.\S+/;
const email = document.querySelector(".form-control.email");

function checkValidEmail(e) {
  if (emailPattern.test(e.target.value)) {
    document.querySelector("#validationServer04").style.display = "none";
    email.style.borderColor = "green";
    email.classList.add("is-valid");
  }
  else {
    document.querySelector("#validationServer04").style.display = "block";
    email.style.borderColor = "red";
    email.classList.remove("is-valid");
  }
}

email.addEventListener("input", (e) => {
  checkValidEmail(e);
})