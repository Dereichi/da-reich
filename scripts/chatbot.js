function sendChat() {
  const input = document.getElementById('chatInput').value.toLowerCase();
  let response = "";

  if (input.includes("skills")) {
    response = "I specialize in HTML, CSS, JavaScript, Git, and responsive design.";
  } else if (input.includes("projects")) {
    response = "I've built a portfolio site, contact form, and integrated backend APIs.";
  } else {
    response = "Ask me about my skills or projects!";
  }

  document.getElementById('chatResponse').textContent = response;
}
