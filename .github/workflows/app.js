// import functions and grab DOM elements
import { getCryptids } from './fetch-utils.js';
import { renderCryptids } from './render-utils.js';

const cryptidContainer = document.querySelector('.cryptid-list');
// let state
let cryptidList = [];

// set event listeners 

window.addEventListener('load', async () => {
    cryptidList = await getCryptids();

    for (let cryptid of cryptidList){
        const cryptidEl = renderCryptids(cryptid);

        cryptidContainer.append(cryptidEl);
    }
    console.log(cryptidContainer);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
