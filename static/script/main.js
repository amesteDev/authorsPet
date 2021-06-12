const getEl = (id) => {
    return document.getElementById(id);
}

let loginForm = getEl('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    userdata = {
        username: getEl('username').value,
        password: getEl('password').value
    };

    fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userdata)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
        })
        .catch(err => {
            // VISA FELSIDA HÄR
            console.log(err);
        });
})


const loginError = (msg) => {

}