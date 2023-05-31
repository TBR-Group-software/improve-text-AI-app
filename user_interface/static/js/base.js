function closeAlert() {
    const alertElement = document.querySelector('.alert');
    if (alertElement !== null) {
        const bsAlert = new bootstrap.Alert(alertElement);
        setTimeout(() => {
            bsAlert.close();
        }, 5000);
    }
}

function createAlert(type, message) {
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show', 'position-absolute', 'message-alert');

    alert.innerHTML = message;

    const closeButton = createCloseButton();
    alert.appendChild(closeButton);

    const container = document.querySelector('.container');
    container.prepend(alert);

    closeAlert();

    return alert;
}

function createCloseButton() {
    const closeButton = document.createElement('button');
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    return closeButton;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
