document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("bridge-form");
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function() {
    const formData = new FormData(form);
    const jsonData = {};

    formData.forEach(function(value, key) {
      jsonData[key] = value;
    });

    const url = "http://ymougenel.com:8079/score";

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error("Erreur de requête: " + xhr.status);
        }
      }
    };

    xhr.onerror = function() {
      console.error("Une erreur s'est produite lors de l'envoi de la requête.");
    };

    xhr.send(JSON.stringify(jsonData));
  });
});
