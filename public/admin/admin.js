const usersDetails = [{
    "register": 0,
    "name": "string",
    "cpf": "string",
    "role": "string",
    "situation": "ANALYSIS",
    "dateOfBirth": "string",
    "image": "string"
  }];

const userDetails = [
    {
        "register": 1,
        "name": "Alice Johnson",
        "cpf": "123.456.789-01",
        "role": "Software Developer",
        "situation": "ANALYSIS",
        "dateOfBirth": "1995-05-15",
        "image": "alice.jpg"
    },
    {
        "register": 2,
        "name": "Bob Smith",
        "cpf": "987.654.321-09",
        "role": "Project Manager",
        "situation": "APPROVED",
        "dateOfBirth": "1988-12-10",
        "image": "bob.jpg"
    },
    {
        "register": 3,
        "name": "Charlie Brown",
        "cpf": "456.789.012-34",
        "role": "QA Engineer",
        "situation": "REJECTED",
        "dateOfBirth": "1990-07-20",
        "image": "charlie.jpg"
    }
];

function showDetails(id) {
    const details = document.getElementById(`details-${id}`);
    const user = userDetails.find(user => user.register === id);

    if (details.style.display === 'block') {
        details.style.display = 'none';
        return;  // Adicionando return para sair da função
    }

    details.innerHTML = `
        <p>Register: ${user.register}</p>
        <p>Name: ${user.name}</p>
        <p>Date of Birth: ${user.dateOfBirth}</p>
        <p>CPF: ${user.cpf}</p>
        <p>Role: ${user.role}</p>
        <p>Situation: ${user.situation}</p>
        <p>Image: ${user.image}</p>
    `;

    details.style.display = 'block';
}

let status;
let clickedLiId;

function setStatus(value, buttonElement) {
    status = value;
    clickedLiId = buttonElement.parentNode.id;
    console.log(status);
    console.log(clickedLiId);
}