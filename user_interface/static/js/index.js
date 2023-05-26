const getCookie = function (cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
}

function improveText(self) {
    const textArea = document.getElementById('editor');
    const type = self.id;
    const text = textArea.value;
    sendText(text, type);
}

function sendText(text, type) {
    let xhttp = new XMLHttpRequest();
    xhttp.onerror = function () {
        console.log(this.responseText);
        console.log('Error');
        createAlert('danger', 'Open AI API error');
        enabledTextArea();
        enabledButton();
        return false
    }

    xhttp.onload = function () {
        console.log(this);
        if (this.status !== 200) {
            console.log(this.responseText);
            console.log('Error');
            createAlert('danger', 'Open AI API error');
        }
        else {
            changeText(JSON.parse(this.responseText)['text']);
        }
        enabledTextArea();
        enabledButton();
        return true
    }

    const data = {
        text: text,
        type: type
    }

    const postJSON = JSON.stringify(data);

    disabledButton();
    disabledTextArea();

    xhttp.open("POST", `/improve_text/`, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhttp.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhttp.send(postJSON);
}

function changeText(text) {
    const textArea = document.getElementById('editor');
    textArea.value = text;
}

function disabledTextArea() {
    const textarea = document.getElementById('editor');
    textarea.disabled = true;

    const spinnerContainer = document.getElementById('spinnerContainer');
    spinnerContainer.style.display = 'flex';
}

function disabledButton() {
    const buttons = document.getElementsByClassName('action');
    for (let button of buttons) {
        button.disabled = true;
    };
}

function enabledTextArea() {
    const textarea = document.getElementById('editor');
    textarea.disabled = false;

    const spinnerContainer = document.getElementById('spinnerContainer');
    spinnerContainer.style.display = 'none';
}

function enabledButton() {
    const buttons = document.getElementsByClassName('action');
    for (let button of buttons) {
        button.disabled = false;
    };
}

function createAlert(type, message) {
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show', 'position-absolute', 'message-alert');
    const alectConteiner = document.createElement('div');
    alectConteiner.innerHTML = message;
    const closeButton = document.createElement('button');
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    alectConteiner.appendChild(closeButton);
    alert.appendChild(alectConteiner);
    const screen = document.querySelector('.container');
    screen.prepend(alert);

    return alert;
}
