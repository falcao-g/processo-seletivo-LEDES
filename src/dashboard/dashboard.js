
tippy('.link',{
  placement: 'bottom'
})


const infoForm = document.getElementById('infoForm');

infoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const dob = document.getElementById('dob').value;
    const cpf = document.getElementById('cpf').value;

    const usernameElement = document.getElementById('username');
    usernameElement.textContent = name;
});