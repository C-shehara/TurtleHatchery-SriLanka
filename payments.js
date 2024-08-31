const cardNumber = document.getElementById("cardNumber");
const cardNumberError = document.getElementById("cardNumberError");

const expiryDate = document.getElementById("expiryDate");
const expiryDateError = document.getElementById("expiryDateError");

const cvc = document.getElementById("cvc");
const cvcError = document.getElementById("cvcError");

const nameOnCard = document.getElementById("nameOnCard");
const nameOnCardError = document.getElementById("nameOnCardError");

const payBtn = document.getElementById("payBtn");

// Define the input details and their corresponding error elements in an array
const details = [
  { input: cardNumber, error: cardNumberError, validator: isNumbers, errorMessage: "Invalid card number" },
  { input: expiryDate, error: expiryDateError, validator: isNumbers, errorMessage: "Invalid expiry date (MM/YYYY)" },
  { input: cvc, error: cvcError, validator: isNumbers, errorMessage: "Invalid CVC" },
  { input: nameOnCard, error: nameOnCardError, validator: isLetters, errorMessage: "Invalid characters included" }
];

// Add event listeners and call the common function for each detail
details.forEach(detail => {
  detail.input.addEventListener("input", function() {
    checkValidity(detail);
  });
});

payBtn.addEventListener("click", nextPage);

// Common function to handle errors for different input details
function checkValidity(detail) {
  const value = detail.input.value;
  const maxLength = detail.input.maxLength;

  if (detail.input === expiryDate) {    
    // Ensure only the first 2 digits are MM, and the rest is YYYY
    const formattedValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
    
    // Update the input value
    detail.input.value = formattedValue;}

  if (!detail.validator(value)) {
    detail.error.innerHTML = detail.errorMessage;
  } else if (value.length < maxLength) {
    detail.error.innerHTML = "Incomplete field";
  } else if (value.trim() === "") { // Check if value is empty after trimming whitespace
    detail.error.innerHTML = "Field is required"; // Display an error message for empty value
  } else {
    detail.error.innerHTML = "";
  }

  checkFormValidity();
}

function isNumbers(input) {
  // Loop through each character in the mobileNumber
  for (let i = 0; i < input.length; i++) {
    const digit = input[i];

    // Check if the character is not a digit (0-9)
    if (digit < '0' || digit > '9') {
      return false;
    }
  }
  return true;
}
function isLetters(input){
  // Loop through each character in the fullName
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // Check if the character is not a letter (a-z, A-Z) or a space
    if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ')) {
      return false;
    }
  }
  return true;

}

function checkFormValidity() {
  const isAllFieldsValid = details.every(detail => {
    const value = detail.input.value;
    const maxLength = detail.input.maxLength;

    if (!detail.validator(value)) {
      return false;
    } else if (value.length < maxLength || value.trim() === "") {
      return false;
    }
    return true;
  });

  if (isAllFieldsValid) {
    payBtn.removeAttribute("disabled");
  } else {
    payBtn.setAttribute("disabled", "disabled");
  }
}



function nextPage(event){
  // Redirect to the "Payments" page
  event.preventDefault(); // Prevent form submission
  window.location.href = "./confirmation.html";
}

