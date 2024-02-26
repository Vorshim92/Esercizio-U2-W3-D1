// ESERCIZIO 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  ageCompare(selectedUser) {
    if (this.age < selectedUser.age) {
      return console.log("MINORE");
    } else if (this.age > selectedUser.age) {
      return console.log("MAGGIORE");
    } else {
      return console.log("sono uguali");
    }
  }
}

Vorshim = new User("Stefano", "Scalfari", 31, "Roma");
Davide = new User("Davide", "Vecchio", 27, "Cosenza");
Luca = new User("Luca", "Barbuto", 30, "Nord");
console.log(Vorshim);
console.log(Davide);
console.log(Luca);
console.log(Vorshim.age);
console.log(Davide.age);
console.log(Luca.age);

Davide.ageCompare(Vorshim);
Luca.ageCompare(Davide);
Vorshim.ageCompare(Luca);

// ESERCIZIO 2
const arrayPets = [];
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner(person) {
    if (this.ownerName === person.ownerName) {
      console.log("il Pet: " + this.petName + ", has the same Owner of: " + person.petName + ": " + this.ownerName);
    } else console.log("il Pet: " + this.petName + ", è senza padrone condiviso.");
  }
}
const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  createPet();
});
function createPet() {
  let petName = document.getElementById("petName-field").value;
  let ownerName = document.getElementById("ownerName-field").value;
  let species = document.getElementById("species-field").value;
  let breed = document.getElementById("breed-field").value;
  const newPet = new Pet(petName, ownerName, species, breed);

  arrayPets.push(newPet);
  addPetToList(newPet);
  document.getElementById("petForm").reset();
  if (arrayPets.length > 1) {
    for (let i = 0; i < arrayPets.length - 1; i++) {
      arrayPets[arrayPets.length - 1].sameOwner(arrayPets[i]);
    }
  }
}
function addPetToList(pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.innerText = "Pet: " + pet.petName + ", Owner: " + pet.ownerName + ", Species: " + pet.species + ", Breed: " + pet.breed;
  petList.appendChild(listItem);
}
