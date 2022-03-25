// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
import { getGoblins, updateGoblins, signInUser, logout } from './fetch-utils.js';

window.addEventListener('load', async () => {
    
});



const goblinContainer = document.getElementById('goblins');
const goblinInput = document.getElementById('goblin-input');
const passwordInput = document.getElementById('password-input');
const newGobButton = document.getElementById('goblin-button');
//const goblinForm = document.getElementById('goblin-form');
const yourHitPoints = document.getElementById('hero-hp');
const gobsSlain = document.getElementById('gobs-slain');
const heroImage = document.getElementById('hero');
const healthPotions = document.getElementById('health-potions');
const logoutButton = document.getElementById('log-out');

let yourHP = 10;
let gobKills = 0;
let potionCount = 0;
let potionsDisplayed = 0;
let goblinArray = [];





//healthPotions.textContent = '🧉';





healthPotions.addEventListener('click', () => {
    if (yourHP < 1) {
        alert('Potions won\'t help you now...');
    } else {
        console.log(potionsDisplayed);
        if (potionsDisplayed > 0){
            yourHP += 5;
            if (yourHP > 9){
                yourHP = 10;
                alert('Your HP is MAXED OUT!');
            }
            potionsDisplayed--;
            potionCount = potionsDisplayed;
            potionsDisplayed = 0;
            healthPotions.textContent = '';
            displayPotions();
            displayHP();

        }

    }
    
});



newGobButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let password = passwordInput.value;
    let email = goblinInput.value;
    await signInUser(email, password);
    displayGoblins();
});

logoutButton.addEventListener('click', async (e) => {
    e.preventDefault();

    logout();
});


async function displayGoblins() {
    goblinArray = await getGoblins();
    goblinContainer.textContent = '';
    console.log(goblinArray);

    for (let goober of goblinArray) {
        const newGob = renderGoblin(goober);
        newGob.addEventListener('mouseover', () => {
            newGob.classList.add('highlight');
        });
        newGob.addEventListener('mouseout', () => {
            newGob.classList.remove('highlight');
        });
        newGob.addEventListener('click', async () => {
            if (yourHP > 0) {
                if (goober.hp > 0) {
                    if (Math.random() > .5) {
                        
                        goober.hp--;
                        
                        await updateGoblins(goober);
                        displayGoblins();
                        
                        alert('You hit!');
                        if (goober.hp === 0) {
                            gobKills++;
                            gobsSlain.textContent = `You've bested ${gobKills} goblins.`;
                            if (Math.random() > .5){
                                alert('The goblin dropped a potion!');
                                potionCount++;
                                displayPotions();
                            }
                     
                        }
                    } else {
                        alert('Golbin: Nya, nya! You missed!');
                    }
                    
                    if (goober.hp > 0) {
                        if (Math.random() > .5) {
                            alert('The Goblin\'s blade hit its mark!');
                            yourHP -= goober.attk;
                            if (yourHP < 1) {
                                heroImage.src = 'assets/herodead.png';
                                yourHP = 0;
                                alert('YOU HAVE PERISHED!');
                                
                            }
                        } else {
                            alert('You dodged the Goblin\'s blade.');
                        }
    
                    }
                    displayHP();
                    
                }
            }
            
        });

        goblinContainer.append(newGob);
    }
    gobsSlain.textContent = `You've bested ${gobKills} goblins.`;
    goblinArray = await getGoblins();
    

}

function displayHP(){
    yourHitPoints.textContent = `HP: ${yourHP}/10`;
}

function displayPotions() {
    
    if (potionCount > 0){
        potionCount--;
        potionsDisplayed++;
        healthPotions.textContent += '🧉';
        displayPotions();
    }

}


displayGoblins();
displayHP();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new stat