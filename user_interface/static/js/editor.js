const getCookie = function(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  };

  function improveText(self) {
    const textArea = document.getElementById("editor");
    const type = self.id;
    const text = textArea.value;
    sendText(text, type);
  }

  function sendText(text, type) {
    const xhttp = new XMLHttpRequest();
    xhttp.onerror = function() {
      console.log(this.responseText);
      console.log("Error");
      createAlert("danger", "Open AI API error");
      enableAll();
      return false;
    };

    xhttp.onload = function() {
      console.log(this);
      if (this.status !== 200) {
        console.log(this.responseText);
        console.log("Error");
        createAlert("danger", "Open AI API error");
      } else {
        const response = JSON.parse(this.responseText);
        if (response && response.text) {
          changeText(response.text);
        }
      }
      enableAll();
      return true;
    };

    const data = {
      text: text,
      type: type
    };

    const postJSON = JSON.stringify(data);

    disableAll();

    xhttp.open("POST", "/improve_text/", true);
    xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhttp.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
    xhttp.send(postJSON);
  }

  function changeText(text) {
    const textArea = document.getElementById("result");
    textArea.value = text;
  }

  function disableElement(elementId, spinnerContainerId) {
    const element = document.getElementById(elementId);
    element.disabled = true;

    const spinnerContainer = document.getElementById(spinnerContainerId);
    spinnerContainer.style.display = "flex";
  }

  function enableElement(elementId, spinnerContainerId) {
    const element = document.getElementById(elementId);
    element.disabled = false;

    const spinnerContainer = document.getElementById(spinnerContainerId);
    spinnerContainer.style.display = "none";
  }

  function disableAll() {
    disableElement("editor", "editorSpinnerContainer");
    disableElement("result", "resultSpinnerContainer");
    disableButton("action");
  }

  function enableAll() {
    enableElement("editor", "editorSpinnerContainer");
    enableElement("result", "resultSpinnerContainer");
    enableButton("action");
  }

  function disableButton(buttonClass) {
    const buttons = document.getElementsByClassName(buttonClass);
    for (let button of buttons) {
      button.disabled = true;
    }
  }

  function enableButton(buttonClass) {
    const buttons = document.getElementsByClassName(buttonClass);
    for (let button of buttons) {
      button.disabled = false;
    }
  }

  function copyResult() {
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    createAlert("info", "Result copied to clipboard");
  }
