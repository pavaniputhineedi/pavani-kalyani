function validateForm(event) {  event.preventDefault(); // Prevent form submission for now
  // Get form elements
  const name = document.getElementById('name').value;  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // Simple validation  if (name.trim() === ''  email.trim() === ''  message.trim() === '') {
    alert('Please fill out all fields');    return;
  }
  // Additional email validation  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');    return;
  }
  // Form is valid, you can submit the form or perform further actions here  alert('Form submitted successfully!');
}
function isValidEmail(email) {
  // Basic email validation regex  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);}