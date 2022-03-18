// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinArray = [
    { name: 'Tapatio',
        hp: 3 },
    { name: 'Sriracha',
        hp: 1 }];


const goblinContainer = document.getElementById('goblins');
const goblinInput = document.getElementById('goblin-input');
const newGobButton = document.getElementById('goblin-button');
const goblinForm = document.getElementById('goblin-form');
const yourHitPoints = document.getElementById('hero-hp');
const gobsSlain = document.getElementById('gobs-slain');
const heroImage = document.getElementById('hero');

let yourHP = 10;
let gobKills = 0;




newGobButton.addEventListener('click', (e) => {
    e.preventDefault();

    const data = goblinInput.value;

    if (goblinInput.value === ''){
        alert('A goblin deserves a name!');
    } else {
        const newGob = {
            name: data,
            hp: Math.ceil(Math.random() * 5) };
    
        goblinArray.unshift(newGob);
        
    
        displayGoblins();
        
        goblinForm.reset();

    }

    
});

goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(goblinForm);

    let nameValue = data.get('goblin-field');

    if (nameValue === ''){
        alert('A goblin deserves a name!');
    } else {
        const newGob = {
            name: nameValue || `Goblin # ${Math.floor(Math.random() * 1000)}`,
            hp: Math.ceil(Math.random() * 5) };
    
        goblinArray.unshift(newGob);
       
    
        displayGoblins();
        
        goblinForm.reset();

    }

    
});



function displayGoblins() {
    goblinContainer.innerHTML = '';

    for (let goober of goblinArray) {
        const newGob = renderGoblin(goober);

        newGob.addEventListener('click', () => {
            
            if (goober.hp > 0) {
                if (Math.random() > .5) {
                    
                    goober.hp--;
                    displayGoblins();
                    alert('You hit!');
                    if (goober.hp === 0) {
                        gobKills++;
                        gobsSlain.textContent = `You've bested ${gobKills} goblins.`;
                    }
                } else {
                    alert('Golbin: Nya, nya! You missed!');
                }
                
                if (goober.hp > 0) {
                    if (Math.random() > .3) {
                        alert('The Goblin\'s blade hit its mark!');
                        yourHP--;
                        if (yourHP === 0) {
                            alert('YOU HAVE PERISHED!');
                            heroImage.src = 'assets/herodead.JPG';
                        }
                    } else {
                        alert('You dodged the Goblin\'s blade.');
                    }

                }
                displayHP();
                
            }
        });

        goblinContainer.append(newGob);
    }
    gobsSlain.textContent = `You've bested ${gobKills} goblins.`;

}

function displayHP(){
    yourHitPoints.textContent = `HP: ${yourHP}`;
}
displayGoblins();
displayHP();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new stat