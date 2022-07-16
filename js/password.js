let passwordValue =  document.querySelector(".form-control.password");
let pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

passwordValue.addEventListener("input", (e) => {
  if (pattern.test(e.target.value)) {
    document.querySelector("#validationServer09").style.display = "none";
    document.querySelector(".form-control.password").style.borderColor = "green";
  }
  else {
    document.querySelector("#validationServer09").style.display = "block";
    document.querySelector(".form-control.password").style.borderColor = "red";
  }
})
