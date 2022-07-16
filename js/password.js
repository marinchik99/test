let password =  document.querySelector(".form-control.password");
let confirmPassword = document.querySelector(".form-control.confirm");
let pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

function checkValidPassword(e) {
  if (pattern.test(e.target.value)) {
    document.querySelector("#validationServer09").style.display = "none";
    document.querySelector(".form-control.password").style.borderColor = "green";
  }
  else {
    document.querySelector("#validationServer09").style.display = "block";
    document.querySelector(".form-control.password").style.borderColor = "red";
  }
}

function checkConfirmPassword(e) {
  if (password.value !== e.target.value) {
    document.querySelector("#validationServer10").style.display = "block";
    document.querySelector(".form-control.confirm").style.borderColor = "red";
  }
  else {
    document.querySelector("#validationServer10").style.display = "none";
    document.querySelector(".form-control.confirm").style.borderColor = "green";
  }
}
password.addEventListener("input", (e) => {
  checkValidPassword(e);
})

confirmPassword.addEventListener("input", (e) => {
  checkConfirmPassword(e);
})