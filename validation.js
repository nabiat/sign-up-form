
function check() {
    let password = document.getElementById('pass').value;
    let password_confirm = document.getElementById('pass_confirm').value;

    if (password !== password_confirm) {
        document.querySelector('span').textContent = '* Passwords do not match.';
        document.querySelector('button').disabled = true;
    } else {
        document.querySelector('span').textContent = '';
        document.querySelector('button').disabled = false;
    }
}