
const animalForm = document.getElementById('animalForm');
const animalList = document.getElementById('animalList');

let animals = JSON.parse(localStorage.getItem('animals')) || [];

function renderAnimals() {
    animalList.innerHTML = '';
    animals.forEach((animal, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            ${animal.type} - 
            <input type="number" value="${animal.weight}" min="0" id="weight-${index}">
            kg
            <span>
                <button onclick="saveAnimal(${index})">Save</button>
                <button onclick="deleteAnimal(${index})">Delete</button>
            </span>
        `;

        animalList.appendChild(li);
    });
}

animalForm.addEventListener('submit', function(e){
    e.preventDefault();
    const type = document.getElementById('type').value;
    const weight = document.getElementById('weight').value;

    if(type && weight) {
        animals.push({type, weight});
        localStorage.setItem('animals', JSON.stringify(animals));
        animalForm.reset();
        renderAnimals();
    }
});

function deleteAnimal(index) {
    if(confirm('Are you sure you want to remove this animal?')) {
        animals.splice(index, 1);
        localStorage.setItem('animals', JSON.stringify(animals));
        renderAnimals();
    }
}

function saveAnimal(index) {
    const newWeight = document.getElementById(`weight-${index}`).value;
    if(newWeight !== '' && newWeight >= 0) {
        animals[index].weight = newWeight;
        localStorage.setItem('animals', JSON.stringify(animals));
        renderAnimals();
    }
}

renderAnimals();
