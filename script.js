function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = btoa(inputText);
    document.getElementById("outputText").value = encryptedText;
  }

  function decrypt() {
    var encryptedText = document.getElementById("inputText").value;
    var decryptedText = atob(encryptedText);
    document.getElementById("outputText").value = decryptedText;
  }