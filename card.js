document.querySelector('#credit-card').addEventListener('submit', submitHandler);

function isCardNumberValid(number) {
  // For demo: Only allow this fake card number
  return number === '1234123412341234';
}

function displayError(msg) {
  document.querySelector('.errorMsg').textContent = msg;
}

function clearError() {
  document.querySelector('.errorMsg').textContent = '';
}

function submitHandler(event) {
  event.preventDefault();

  const cardNumber = document.querySelector('#cardNumber').value.trim();
  const expMonth = document.querySelector('#expMonth').value.trim();
  const expYear = document.querySelector('#expYear').value.trim();
  const cvv = document.querySelector('#cvv').value.trim();

  // Clear previous error
  clearError();

  // Card number must be numeric and valid
  if (isNaN(cardNumber) || cardNumber.length !== 16) {
    displayError("Card number must be a 16-digit number.");
    return;
  }

  if (!isCardNumberValid(cardNumber)) {
    displayError("Invalid card number.");
    return;
  }

  // Expiration check
  const now = new Date();
  const inputDate = new Date(`20${expYear}`, expMonth - 1); // YY → YYYY

  if (isNaN(expMonth) || isNaN(expYear) || inputDate < now) {
    displayError("Expiration date must be a valid future date.");
    return;
  }

  // CVV must be 3 digits
  if (isNaN(cvv) || cvv.length !== 3) {
    displayError("CVC must be a 3-digit number.");
    return;
  }

  // All good!
  alert("Form submitted successfully!");
}
