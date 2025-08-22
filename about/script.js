   // Initialize EmailJS
emailjs.init("yYCN_rbcdrlEBbLfv"); // Replace with your EmailJS Public Key

// Select the form
const form = document.getElementById("contact-form");

// Listen for form submission
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Send form data using EmailJS
  emailjs.sendForm("service_oo4ix5l", "template_3119slp", "#contact-form")
    .then(function(response) {
      alert("Message sent successfully! ✅");
      form.reset(); // Clear the form
    }, function(error) {
      alert("Failed to send message. ❌");
      console.log(error);
    });
});
