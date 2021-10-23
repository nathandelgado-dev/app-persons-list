const persons = [];

const personsList = document.getElementById('showPersonsList');

function showPersons() {
    let text = '';
    for (let person of persons) {
        console.log(person);
        text += `<li style="block">${person.name} ${person.lastName}<span onclick='deletePerson(${person.id})' class="material-icons-outlined" >
        remove_circle_outline
        </span></li>`
    }
    document.getElementById('showPersonsList').innerHTML = text;
}

function addPerson() {
    const forma = document.forms['formPerson'];
    const name = forma['name'];
    const lastName = forma['lastName'];
    if (name.value != '' && lastName.value != '') {
        const person = new Person(name.value, lastName.value);
        persons.push(person);
        clearForm();
        showPersons();
    } else {
        alert('Values required!');
    }
}

function clearForm() {
    let form = document.getElementById('formPerson');
    form.reset();
}

function deletePerson(id) {
    let deleteIndex = persons.findIndex(person => person.id === id);
    persons.splice(deleteIndex, 1);
    showPersons();
}