document.getElementById("sendBtn").addEventListener("click", send);

function send() {
  const chat = document.getElementById("chat");
  const msg = document.getElementById("msg").value;

  chat.innerHTML += `<p><b>You:</b> ${msg}</p>`;

  // Placeholder AI response
  chat.innerHTML += `<p><b>TrilobiteAI:</b> Hello!</p><br>`;

  document.getElementById("msg").value = "";
}
