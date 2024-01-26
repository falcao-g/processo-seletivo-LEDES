/* eslint-disable no-unused-vars */

function formatCPF(cpf) {
  return cpf.slice(0, 3).concat('.').concat(cpf.slice(3, 6)).concat('.')
    .concat(cpf.slice(6, 9))
    .concat('-')
    .concat(cpf.slice(9, 11));
}

function edit() {
  const dados = document.getElementsByClassName('lbl');
  for (let i = 0; i < dados.length; i += 1) {
    dados[i].style.display = 'none';
  }
  const inputs = document.getElementsByClassName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].style.display = 'inline';
  }

  const editar = document.querySelector('.edit-button');
  editar.style.display = 'none';

  const salvar = document.querySelector('.save-button');
  salvar.style.display = 'inline';

  document.querySelector('.input-nome').value = document.querySelector('.nome').innerText;
  document.querySelector('.input-nascimento').value = document.querySelector('.nascimento').innerText.split('/').reverse().join('-');
  document.querySelector('.input-cpf').value = document.querySelector('.cpf').innerText.replace(/\D/g, '');
  document.querySelector('.input-cargo').value = document.querySelector('.cargo').innerText;
}

function save() {
  const dados = document.getElementsByClassName('lbl');
  for (let i = 0; i < dados.length; i += 1) {
    dados[i].style.display = 'inline';
  }
  const inputs = document.getElementsByClassName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].style.display = 'none';
  }

  const editar = document.querySelector('.edit-button');
  editar.style.display = 'inline';

  const salvar = document.querySelector('.save-button');
  salvar.style.display = 'none';

  try {
    fetch('http://localhost:8080/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        register: document.getElementById('register').innerText,
        name: document.querySelector('.input-nome').value,
        dateOfBirth: document.querySelector('.input-nascimento').value,
        cpf: document.querySelector('.input-cpf').value,
        role: document.querySelector('.input-cargo').value,
        image: document.getElementById('file').files[0] ?? 'base64',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector('.nome').innerText = data.name;
        document.querySelector('.nascimento').innerText = data.dateOfBirth.slice(0, 10).split('-').reverse().join('/');
        document.querySelector('.cpf').innerText = formatCPF(data.cpf);
        document.querySelector('.cargo').innerText = data.role;
      });
  } catch (error) {
    window.location.href = 'http://localhost:8080/error/error.html';
  }
}

function change(event) {
  const arquivoinserido = event.target;
  const prever = document.getElementById('preverImage');

  if (arquivoinserido.files.length > 0) {
    const arquivo = arquivoinserido.files[0];
    const leitor = new FileReader();
    leitor.onload = (e) => {
      prever.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
  } else {
    console.log('Nenhum arquivo selecionado');
  }
}

function retrieveUserData() {
  try {
    fetch('http://localhost:8080/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('register').innerText = data.register;
        document.getElementById('name').innerText = data.name;
        document.getElementById('dateOfBirth').innerText = data.dateOfBirth.slice(0, 10).split('-').reverse().join('/');
        document.getElementById('cpf').innerText = formatCPF(data.cpf);
        document.getElementById('role').innerText = data.role;
        document.getElementById('role2').innerText = data.role;
        // change image, using the base64 file we have in data.image
        document.getElementById('file').src = data.image;
        if (data.type !== 'ADMIN') {
          document.getElementById('only-admin').style.display = 'none';
        }
        if (data.situation === 'ANALYSIS') {
          document.getElementById('situation').style.color = '#FFC107';
          document.getElementById('situationText').innerText = 'Em análise';
          document.querySelector('.edit-button').style.display = 'none';
        } else if (data.situation === 'APPROVED') {
          document.getElementById('situation').style.color = '#28A745';
          document.getElementById('situationText').innerText = 'Aprovado';
        } else if (data.situation === 'DISAPPROVED') {
          document.getElementById('situation').style.color = '#DC3545';
          document.getElementById('situationText').innerText = 'Recusado';
        }
      });
  } catch (error) {
    window.location.href = 'http://localhost:8080/error/error.html';
  }
}

retrieveUserData();
