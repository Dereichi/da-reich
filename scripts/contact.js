document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !age || !message) {
    document.getElementById("feedback").innerText = "Please fill out all fields.";
    return;
  }

  document.getElementById("feedback").innerText = "Message sent! (Not really, but you get the idea 😄, eat poop 💩)";
  this.reset();
});
