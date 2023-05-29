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
        enableAll();
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
        enableAll();
        return true
    }

    const data = {
        text: text,
        type: type
    }

    const postJSON = JSON.stringify(data);

    disableAll();

    xhttp.open("POST", `/improve_text/`, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhttp.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhttp.send(postJSON);
}

function changeText(text) {
    const textArea = document.getElementById('result');
    textArea.value = text;
}

function disableTextArea() {
    const textarea = document.getElementById('editor');
    textarea.disabled = true;

    const editorSpinnerContainer = document.getElementById('editorSpinnerContainer');
    editorSpinnerContainer.style.display = 'flex';
}

function disableButton() {
    const buttons = document.getElementsByClassName('action');
    for (let button of buttons) {
        button.disabled = true;
    };
}

function enableTextArea() {
    const textarea = document.getElementById('editor');
    textarea.disabled = false;

    const editorSpinnerContainer = document.getElementById('editorSpinnerContainer');
    editorSpinnerContainer.style.display = 'none';
}

function disableRusultTextArea() {
    const resultSpinnerContainer = document.getElementById('resultSpinnerContainer');
    resultSpinnerContainer.style.display = 'flex';
}

function enableRusultTextArea() {
    const resultSpinnerContainer = document.getElementById('resultSpinnerContainer');
    resultSpinnerContainer.style.display = 'none';
}


function enableButton() {
    const buttons = document.getElementsByClassName('action');
    for (let button of buttons) {
        button.disabled = false;
    };
}

function disableAll() {
    disableButton();
    disableTextArea();
    disableRusultTextArea();
}

function enableAll() {
    enableButton();
    enableTextArea();
    enableRusultTextArea();
}

function copyResult(){
    const result = document.getElementById('result');
    result.select();
    document.execCommand("copy");
    createAlert('info', 'Result copied to clipboard');
}
