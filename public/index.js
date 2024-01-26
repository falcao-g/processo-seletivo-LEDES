/* eslint-disable no-undef */

const container = document.getElementById('container');

toggle = () => {
  container.classList.toggle('sign-in');
  container.classList.toggle('sign-up');
};

setTimeout(() => {
  container.classList.add('sign-in');
}, 200);

registerUser = () => {
  const name = document.getElementById('name');
  const cpf = document.getElementById('cpf');
  const role = document.getElementById('role');
  const dateOfBirth = document.getElementById('dateOfBirth');
  const password = document.getElementById('password');

  try {
    fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        cpf: cpf.value,
        role: role.value,
        dateOfBirth: dateOfBirth.value,
        password: password.value,
        image: 'imagem',
      }),
    }).then(() => { window.location.href = 'http://localhost:8080/dashboard/dashboard.html'; });
  } catch (error) {
    window.location.href = 'http://localhost:8080/error/error.html';
  }
};

loginUser = () => {
  const register = document.getElementById('register');
  const password = document.getElementById('lpassword');

  try {
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        register: register.value,
        password: password.value,
      }),
    })
      .then(() => {
        window.location.href = 'http://localhost:8080/dashboard/dashboard.html';
      });
  } catch (error) {
    window.location.href = 'http://localhost:8080/error/error.html';
  }
};
