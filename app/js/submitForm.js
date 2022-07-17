const form = document.querySelector(".form");
const nationality = document.querySelector(".nation");
const day =  document.querySelector(".day");
const month =  document.querySelector(".month");
const year =  document.querySelector(".year");
const gender =  document.querySelectorAll(".form-check-input");

// animation for button 'complete signup', when submit is failed.

function animateButton() {
  document.querySelectorAll(".form-control").forEach((item) => {
    if (!item.classList.contains('is-valid')) {
      document.querySelector(".create-acc__button").classList.add('animate');
    }
    setTimeout(() => {
      document.querySelector(".create-acc__button").classList.remove('animate');
    }, 500);
  });
}

document.querySelector(".create-acc__button").onclick = () => {
  animateButton();
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let formValues = {
    firstName: firstName.value,
    lastName: lastName.value,
    nationality: nationality.value,
    email: email.value,
    birth: {
      day: day.value, 
      month: month.value,
      year: year.value,
    },
    gender: {
      male: gender[0].checked,
      female: gender[1].checked
    },
    password: password.value
  };

  if (document.querySelectorAll('.is-valid').length == 5) {
    // send request
    postRequest(formValues).then(() => {
      e.target.reset();
      console.log(formValues);
      document.querySelectorAll(".form-control").forEach((item) => {
        item.classList.remove('is-valid');
        item.style.borderColor = "#979797";
      });

      document.querySelector(".main-column__title").style.display = "none";
      document.querySelectorAll(".form__component").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelector(".svg").style.display = "none";
      document.querySelector(".create-acc__button").style.display = "none";
      document.querySelector(".message").style.display = "block";
    }).catch(() => {
      document.querySelector(".create-acc__button").classList.add('animate');
    }).finally(() => {
      setTimeout(() => {
        document.querySelector(".main-column__title").style.display = "block";
        document.querySelector(".svg").style.display = "block";
        document.querySelectorAll(".form__component").forEach((item) => {
          item.style.display = "block";
        });
        document.querySelector(".create-acc__button").style.display = "block";
        document.querySelector(".message").style.display = "none";
      }, 3000);
    });
  } 
});
