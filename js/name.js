const firstName =  document.querySelector(".form-control.first-name");
const lastName = document.querySelector(".form-control.last-name");
const namePattern = /^[А-ЯA-Z][а-яa-z]{2,}$/;

function checkValidName(e, str, el) {
  if (namePattern.test(e.target.value)) {
    document.querySelector(str).style.display = "none";
    el.style.borderColor = "green";
    el.classList.add("is-valid");
  }
  else {
    document.querySelector(str).style.display = "block";
    el.style.borderColor = "red";
    el.classList.remove("is-valid");
  }
}

firstName.addEventListener("input", (e) => {
  checkValidName(e, "#validationServer01", firstName);
})

lastName.addEventListener("input", (e) => {
  checkValidName(e, "#validationServer02", lastName);
})
