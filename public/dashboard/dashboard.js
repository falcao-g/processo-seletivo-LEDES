/* eslint-disable no-unused-vars */
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
  document.querySelector('.input-nascimento').value = document.querySelector('.nascimento').innerText;
  document.querySelector('.input-cpf').value = document.querySelector('.cpf').innerText;
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

  document.querySelector('.nome').innerText = document.querySelector('.input-nome').value;
  document.querySelector('.nascimento').innerText = document.querySelector('.input-nascimento').value;
  document.querySelector('.cpf').innerText = document.querySelector('.input-cpf').value;
  document.querySelector('.cargo').innerText = document.querySelector('.input-cargo').value;
}

function alterar(event) {
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
