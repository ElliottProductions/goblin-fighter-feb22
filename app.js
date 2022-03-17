// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinArray = [
    { name: 'Tapatio',
        hp: 5 },
    { name: 'Sriracha',
        hp: 1 }];

const goblinContainer = document.getElementById('goblins');
const goblinInput = document.getElementById('goblin-input');
const newGobButton = document.getElementById('goblin-button');
const goblinForm = document.getElementById('goblin-form');

let yourHP = 10;




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

        newGob.addEventListener('click', () => {
            
            if (goober.hp > 0 && Math.floor(Math.random() > .5)) {
                goober.hp--;
                displayGoblins();
                alert('You hit!');
            } else {
                alert('Golbin: Nya, nya! You missed!');
            }

            if (Math.floor(Math.random() > .66)) {
                alert('The Goblin\'s blade hit its mark!')
                yourHP--;
            } else {
                alert('You dodged the Goblin\'s blade.')
            }

        });

        goblinContainer.append(newGob);
    }

}

displayGoblins();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new stat