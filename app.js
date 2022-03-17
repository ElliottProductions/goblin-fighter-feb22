// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinArray = [
    { name: 'Tapatio',
        hp: 5 },
    { name: 'Sriracha',
        hp: 5 }];

const goblinContainer = document.getElementById('goblins');



for (let goober of goblinArray) {
    
    const gobEl = renderGoblin(goober);

    goblinContainer.append(gobEl);

}

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


