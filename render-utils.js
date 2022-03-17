export function renderGoblin(goober) {
    const newGob = document.createElement('div');
    newGob.classList.add('goblinwithclass');

    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    
    
    
    nameEl.textContent = goober.name;
    hpEl.textContent = goober.hp;

    newGob.append(nameEl, hpEl);

    return newGob;



}