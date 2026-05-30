document.addEventListener("DOMContentLoaded", function () {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function (link) {
    var targetSelector = link.getAttribute("href");
    if (targetSelector && targetSelector !== "#") {
      var target = document.querySelector(targetSelector);
      if (target) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  });

  var tableButton = document.querySelector(".btn-table");
  var callButton = document.querySelector(".btn-call");
  var bookingButton = document.querySelector(".btn-book");
  var contactSection = document.querySelector("#contact");
  var contactForm = document.querySelector("#contact form");

  if (tableButton && contactSection) {
    tableButton.addEventListener("click", function () {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (callButton) {
    callButton.addEventListener("click", function () {
      window.location.href = "tel:+1234567890";
    });
  }

  if (bookingButton && contactForm) {
    bookingButton.addEventListener("click", function (event) {
      event.preventDefault();

      var nameField = contactForm.querySelector('input[type="text"]');
      var emailField = contactForm.querySelector('input[type="email"]');
      var dateField = contactForm.querySelector('input[type="date"]');
      var partyField = contactForm.querySelector('input[type="number"]');

      if (
        !nameField ||
        !emailField ||
        !dateField ||
        !partyField ||
        !nameField.value.trim() ||
        !emailField.value.trim() ||
        !dateField.value ||
        !partyField.value
      ) {
        alert("Please fill in all reservation fields before booking.");
        return;
      }

      alert(
        "Thank you, " +
          nameField.value.trim() +
          ". Your reservation request for " +
          dateField.value +
          " for " +
          partyField.value +
          " people has been received. We will email you at " +
          emailField.value.trim() +
          "."
      );
      contactForm.reset();
    });
  }
});
