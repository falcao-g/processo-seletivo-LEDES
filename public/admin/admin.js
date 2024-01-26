/* eslint-disable no-unused-vars */
let userDetails;

function toogleShowHideDetails(index) {
  const detailsContainer = document.getElementById(`details-${index}`);
  const user = userDetails[index];

  if (!detailsContainer.innerHTML) {
    detailsContainer.innerHTML = `
    <p>Matrícula: ${user.register}</p>
    <p>Nome: ${user.name}</p>
    <p>Data de nascimento: ${user.dateOfBirth.slice(0, 10).split('-').reverse().join('/')}</p>
    <p>CPF: ${user.cpf.slice(0, 3).concat('.').concat(user.cpf.slice(3, 6)).concat('.')}</p>
    <p>Cargo: ${user.role}</p>
    <p>Situação do crachá: Em análise</p>
    <p>Foto: ${user.image}</p>
  `;
  } else {
    detailsContainer.innerHTML = '';
  }

  detailsContainer.style.display = 'block';
}

function listRequests() {
  const listContainer = document.getElementById('requirement-list');

  userDetails.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.id = `requirement-${index + 1}`;

    listItem.innerHTML = `
      Pedido ${index + 1}
      <button class="yellow-button" onclick="toogleShowHideDetails(${index})">Show Details</button>
      <button class="red-button" onclick="setStatus('DISAPPROVED', this)">Set Disapproved</button>
      <button class="green-button" onclick="setStatus('APPROVED', this)">Set Approved</button>
      <div id="details-${index}" class="details"></div>
    `;

    listContainer.appendChild(listItem);
  });
}

function getUserRequests() {
  fetch('http://localhost:8080/admin/requests', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      userDetails = Array.of(...data);
      listRequests();
    });
}

getUserRequests();

function setStatus(status, button) {
  try {
    fetch('http://localhost:8080/admin/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        register: userDetails[button.parentNode.id.split('-')[1] - 1].register,
        situation: status,
      }),
    })
      .then((response) => {
        console.log(response.json());
        button.parentNode.remove();
      });
  } catch (error) {
    window.location.href = 'http://localhost:8080/error/error.html';
  }
}
