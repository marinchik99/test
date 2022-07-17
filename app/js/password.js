const password =  document.querySelector(".form-control.password");
const confirmPassword = document.querySelector(".form-control.confirm");
const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

function checkValidPassword(e) {
  if (pattern.test(e.target.value)) {
    document.querySelector("#validationServer09").style.display = "none";
    password.style.borderColor = "green";
    password.classList.add("is-valid");
  }
  else {
    document.querySelector("#validationServer09").style.display = "block";
    password.style.borderColor = "red";
    password.classList.remove("is-valid");
  }
}

function checkConfirmPassword(e) {
  if (password.value !== e.target.value) {
    document.querySelector("#validationServer10").style.display = "block";
    confirmPassword.style.borderColor = "red";
    confirmPassword.classList.remove("is-valid");
  }
  else {
    document.querySelector("#validationServer10").style.display = "none";
    confirmPassword.style.borderColor = "green";
    confirmPassword.classList.add("is-valid");
  }
}
password.addEventListener("input", (e) => {
  checkValidPassword(e);
})

confirmPassword.addEventListener("input", (e) => {
  checkConfirmPassword(e);
})