
const mobileNumber = document.getElementById("mobileNumber");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirmEmail");
const gender = document.getElementById("gender");
const continuebtn=document.getElementById("continueBtn");
const form=document.getElementById("detailsForm");
// Add event listeners for each input
fullName.addEventListener("input", checkFullNameValidity);
mobileNumber.addEventListener("input", checkMobileNumberValidity);
email.addEventListener("input", checkEmailValidity);
confirmEmail.addEventListener("input", checkConfirmEmailValidity);
gender.addEventListener("change", checkFormValidity);
continuebtn.addEventListener("click", nextPage);

// Function to check if the full name is valid
function isNameValid(fullName) {
  const nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(fullName);
}

// Function to check if the mobile number is valid
function isMobileNumberValid(mobileNumber) {
  const mobileNumberRegex = /^\d{10}$/; // Allows only 10 digits
  return mobileNumberRegex.test(mobileNumber);
}

// Function to check if the email is valid
function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to handle errors for the full name
function checkFullNameValidity() {
  const fullNameInput = document.getElementById("fullName");
  const fullNameError = document.getElementById("fullNameError");
  const fullName = fullNameInput.value;

  if (isNameValid(fullName)) {
    fullNameError.textContent = "";
  } else {
    fullNameError.textContent = "Invalid characters included";
  }

  checkFormValidity();
}

// Function to handle errors for the mobile number
function checkMobileNumberValidity() {
  const mobileNumberInput = document.getElementById("mobileNumber");
  const mobileNumberError = document.getElementById("mobileNumberError");
  const mobileNumber = mobileNumberInput.value;

  if (isMobileNumberValid(mobileNumber)) {
    mobileNumberError.textContent = "";
  } else {
    mobileNumberError.textContent = "Invalid mobile number";
  }

  checkFormValidity();
}

// Function to handle errors for the email
function checkEmailValidity() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value;

  if (isEmailValid(email)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Invalid email address";
  }

  checkFormValidity();
}

// Function to handle errors for the confirm email
function checkConfirmEmailValidity() {
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");
  const confirmEmailError = document.getElementById("confirmEmailError");
  const email = emailInput.value;
  const confirmEmail = confirmEmailInput.value;

  if (email === confirmEmail) {
    confirmEmailError.textContent = "";
  } else {
    confirmEmailError.textContent = "Emails do not match";
  }

  checkFormValidity();
}

// Function to handle form validity and enable the continue button
function checkFormValidity() {
  const fullNameInput = document.getElementById("fullName");
  const mobileNumberInput = document.getElementById("mobileNumber");
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");

  const fullName = fullNameInput.value;
  const mobileNumber = mobileNumberInput.value;
  const email = emailInput.value;
  const confirmEmail = confirmEmailInput.value;

  let nameValid = isNameValid(fullName);
  let mobileValid = isMobileNumberValid(mobileNumber) && mobileNumber.length === 10;
  let emailValid = isEmailValid(email);
  let emailConfirm = email === confirmEmail;

  if (nameValid && mobileValid && emailValid && emailConfirm) {
    continuebtn.removeAttribute("disabled");
  } else {
    continuebtn.setAttribute("disabled", "disabled");
  }
}
function nextPage(event){
  // Redirect to the "Payments" page
  event.preventDefault(); // Prevent form submission
  window.location.href = "payments.html";
}
// Function to handle errors
/*
function checkFormValidity() {
  const fullNameInput = document.getElementById("fullName");
  const mobileNumberInput = document.getElementById("mobileNumber");
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");

  const fullNameError = document.getElementById("fullNameError");
  const mobileNumberError = document.getElementById("mobileNumberError");
  const emailError = document.getElementById("emailError");
  const confirmEmailError = document.getElementById("confirmEmailError");

  const fullName = fullNameInput.value;
  const mobileNumber = mobileNumberInput.value;
  const email = emailInput.value;
  const confirmEmail = confirmEmailInput.value;

  let nameValid=isNameValid(fullName);
  let mobileValid=isMobileNumberValid(mobileNumber) && mobileNumber.length === 10;
  let emailValid=isEmailValid(email);
  let emailConfirm=email===confirmEmail;

  if (nameValid) {
    fullNameError.textContent = "";
  } else {
    fullNameError.textContent = "Invalid characters included";
  }

  if (mobileValid) {
    mobileNumberError.textContent = "";
  } else {
    mobileNumberError.textContent = "Invalid mobile number";
  }


  if (emailValid) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Invalid email address";
  }

  if(emailConfirm){
    confirmEmailError.textContent="";
  }else{
    confirmEmailError.textContent="Emails does not match"
  
  }
  if(nameValid && mobileValid && emailValid && emailConfirm){
    continuebtn.removeAttribute("disabled");
  }
}
function nextPage(event){
  // Redirect to the "Payments" page
  event.preventDefault(); // Prevent form submission
  window.location.href = "payments.html";
}










// Function to check if all required fields are filled
/*function checkFormValidity() {
  const fullName = document.getElementById("fullName").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;

  const formIsValid = fullName && mobileNumber && email && confirmEmail;

  // Get the "Continue with purchase" button element
  const continueBtn = document.getElementById("continueBtn");

  if (formIsValid) {
    // Enable the button if the form is valid
    continueBtn.removeAttribute("disabled");
  } else {
    // Disable the button if the form is not valid
    continueBtn.setAttribute("disabled", "true");
  }
}*/


// Function to handle form submission


// Function to check if the email is valid
/*function isValidEmail(email) {
  // Basic email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to check if all required fields are filled and show error messages
function checkFormValidity() {
  const fullName = document.getElementById("fullName").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;

  const formIsValid = fullName && mobileNumber && email && confirmEmail;

  // Get the "Continue with purchase" button element
  const continueBtn = document.getElementById("continueBtn");

  // Get the error message elements
  const emailError = document.getElementById("emailError");
  const confirmEmailError = document.getElementById("confirmEmailError");

  if (formIsValid) {
    // Hide error messages if the form is valid
    emailError.textContent = "";
    confirmEmailError.textContent = "";

    // Enable the button
    continueBtn.removeAttribute("disabled");
  } else {
    // Show error messages if the form is not valid

    if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email address";
    } else {
      emailError.textContent = "";
    }

    if (email !== confirmEmail) {
      confirmEmailError.textContent = "Emails do not match";
    } else {
      confirmEmailError.textContent = "";
    }

    // Disable the button
    continueBtn.setAttribute("disabled", "true");
  }
}
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

    // Check form validity before proceeding to the next page
    checkFormValidity();
    const continueBtn = document.getElementById("continueBtn");
    if (continueBtn.disabled) {
      // Form is not valid, do not proceed to the next page
      alert("Please fill in all required fields correctly before proceeding.");
    } else {
      // Form is valid, redirect to the next page
      window.location.href = "payment.html";
    }
  
  // Save form values to local storage
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("mobileNumber", mobileNumber);
  localStorage.setItem("email", email);
  localStorage.setItem("gender", gender);
}

function nextPage(){
    // Redirect to the "Payments" page
    event.preventDefault(); // Prevent form submission

    window.location.href = "payments.html";
}
*/