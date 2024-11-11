document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    if (validateForm()) {
      form.submit();
    }
  });
});

function validateForm() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  let isValid = true;

  if (!nombre) {
    showError("nombre", "Por favor, ingrese su nombre.");
    isValid = false;
  }

  if (!validateEmail(email)) {
    showError("email", "Por favor, ingrese un correo electrónico válido.");
    isValid = false;
  }

  if (!mensaje) {
    showError("mensaje", "Por favor, ingrese su mensaje.");
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.innerText = message;
  inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => error.remove());
}
