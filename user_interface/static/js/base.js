
function closeAlert() {
    const alert = document.querySelector('.alert');
    if (alert != null) {
        const bsAlert = new bootstrap.Alert(alert);
        setTimeout(() => {
            bsAlert.close();
        }, 5000)
    }
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
    const container = document.querySelector('.container');
    container.prepend(alert);

    closeAlert();

    return alert;
}
