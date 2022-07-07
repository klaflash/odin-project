function onChange() {
    const password = document.querySelector('input[password]');
    const confirm = document.querySelector('input[confirm]');

    if (confirm.value === password.value) {
        conirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}