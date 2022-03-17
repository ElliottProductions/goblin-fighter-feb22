// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinArray = [
    { name: 'Tapatio',
        hp: 5 },
    { name: 'Sriracha',
        hp: 5 }];

const goblinContainer = document.getElementById('goblins');
const goblinInput = document.getElementById('goblin-input');
const newGobButton = document.getElementById('goblin-button');
const goblinForm = document.getElementById('goblin-form');



for (let goober of goblinArray) {
    
    const gobEl = renderGoblin(goober);

    goblinContainer.append(gobEl);

}

newGobButton.addEventListener('click', (e) => {
    e.preventDefault();
    const data = goblinInput.value;

    const newGob = {
        name: data || `Goblin # ${Math.floor(Math.random() * 1000)}`,
        hp: Math.floor(Math.random() * 5 + 1)};

    goblinArray.push(newGob);
    

    displayGoblins();
    
    goblinForm.reset();
});

goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(goblinForm);

    let nameValue = data.get('goblin-field');

    const newGob = {
        name: nameValue || `Goblin # ${Math.floor(Math.random() * 1000)}`,
        hp: Math.floor(Math.random() * 5 + 1)};

    goblinArray.push(newGob);
   

    displayGoblins();
    
    goblinForm.reset();
});



function displayGoblins() {
    goblinContainer.innerHTML = '';

    for (let goober of goblinArray) {
        const newGob = renderGoblin(goober);

        goblinContainer.append(newGob);
    }

}
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new stat