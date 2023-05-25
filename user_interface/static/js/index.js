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

function sendText(text, type){
    let xhttp = new XMLHttpRequest();
    xhttp.onerror = function () {
        console.log(this.responseText);
        return false
    }

    xhttp.onload = function () {
        console.log(this);
        changeText(JSON.parse(this.responseText)['text']);
        return true
    }

    const data = {
        text: text,
        type: type
    }

    const postJSON = JSON.stringify(data);

    xhttp.open("POST", `/improve_text/`, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhttp.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhttp.send(postJSON);
}

function changeText(text) {
    const textArea = document.getElementById('editor');
    textArea.value = text;
}
