function check() {
    if (document.getElementById('password').value === document.getElementById('confirm-password').value) {
        document.getElementById('alert').style.color = ' rgb(31, 196, 155)';
        document.getElementById('alert').innerHTML = 'Matching';
    } else {
        document.getElementById('alert').style.color = 'rgb(196, 31, 80)';
        document.getElementById('alert').innerHTML = 'Not matching';
    }
}