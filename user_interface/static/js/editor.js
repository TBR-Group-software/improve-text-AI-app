const getCookie = function (cName) {
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
    const improve_text_type = self.id;
    const text_type = textArea.classList[0];
    const text = textArea.value;
    sendText(text, improve_text_type, text_type);
}

function sendText(text, improve_text_type, text_type) {
    const xhttp = new XMLHttpRequest();
    xhttp.onerror = function () {
        console.log(this.responseText);
        console.log("Error");
        createAlert("danger", "Open AI API error");
        enableAll();
        return false;
    };

    xhttp.onload = function () {
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
        improve_text_type: improve_text_type,
        text_type: text_type
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

function showHistoryModal(type) {
    getHistoryData(type);

    const modal = document.getElementById("historyModal");
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

function fillHistoryModal(data) {
    const modal = document.getElementById("historyModal");
    const modalBody = modal.getElementsByClassName("modal-body")[0];

    data.forEach(element => {
        console.log(element);
        let newDiv = document.createElement("div");
        newDiv.classList.add("mb-4");
        newDiv.classList.add("history-container");
        let newTextArea = document.createElement("textarea");
        newTextArea.classList.add("form-control");
        newTextArea.classList.add("mb-3");
        let responseTextArea = newTextArea.cloneNode(true);

        newTextArea.innerHTML = element.text;
        newTextArea.readOnly = true;

        responseTextArea.innerHTML = element.response_text;
        responseTextArea.readOnly = true;

        let improveTypeSpan = document.createElement("span");
        improveTypeSpan.classList.add("improve-type");
        improveTypeSpan.innerHTML = capitalizeFirstLetter(element.history_improvement_type).replace('_', ' ');
        newDiv.appendChild(improveTypeSpan);

        let improveDateSpan = document.createElement("span");
        improveDateSpan.classList.add("improve-date");
        improveDateSpan.classList.add("float-end");
        let dateTime = new Date(element.created_at);
        improveDateSpan.innerHTML = dateTime.toLocaleString();
        newDiv.appendChild(improveDateSpan);

        newDiv.appendChild(newTextArea);
        newDiv.appendChild(responseTextArea);

        modalBody.appendChild(newDiv);
    });
}

function getHistoryData(type) {
    const xhttp = new XMLHttpRequest();
    xhttp.onerror = function () {
        console.log(this.responseText);
        console.log("Error");
        createAlert("danger", "API error");
        return false;
    };

    xhttp.onload = function () {
        console.log(this);
        if (this.status !== 200) {
            console.log(this.responseText);
            console.log("Error");
            createAlert("danger", "API error");
        } else {
            const response = JSON.parse(this.responseText);
            if (response) {
                fillHistoryModal(response.histories);
                return response;
            }
        }
    };

    const data = {
        type: type
    };

    const postJSON = JSON.stringify(data);

    xhttp.open("POST", "/get_history/", true);
    xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhttp.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
    xhttp.send(postJSON);
}
