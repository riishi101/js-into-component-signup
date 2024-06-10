document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const form = document.getElementById("form");
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Show input error message
  function showError(input) {
    const formControl = input.parentElement;
    formControl.classList.add("error");
  }

  // Show success outline
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.add("success");
  }

  // Check email is valid
  function checkEmail(input) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input);
    }
  }

  // Check required fields
  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input);
      } else {
        showSuccess(input);
      }
    });
  }

  // Event handler
  button.addEventListener("click", function (e) {
    e.preventDefault();
    checkRequired([firstName, lastName, password]);
    checkEmail(email);
  });
});
