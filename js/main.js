// ===== Mobile menu toggle =====
var menuBtn = document.getElementById("menuBtn");
var navList = document.getElementById("navList");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", function () {
    navList.classList.toggle("open");
  });
}

// ===== Contact form validation =====
var form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var valid = true;

    // Clear old messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMsg").classList.add("hidden");

    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Please enter your name (at least 2 characters).";
      valid = false;
    }
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      valid = false;
    }
    if (subject === "") {
      document.getElementById("subjectError").textContent = "Please choose a subject.";
      valid = false;
    }
    if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      document.getElementById("successMsg").classList.remove("hidden");
      form.reset();
    }
  });
}
