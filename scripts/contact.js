const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

["name", "email", "age", "message"].forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener("input", () => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#ccc";
    }
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !age || !message) {
    feedback.innerText = "Please fill out all fields.";
    feedback.style.color = "red";
    return;
  }

  feedback.innerText = "Sending...";
  feedback.style.color = "blue";

  setTimeout(() => {
    feedback.innerText = "Message sent! 🎉";
    feedback.style.color = "green";
    this.reset();
  }, 1500);
});
