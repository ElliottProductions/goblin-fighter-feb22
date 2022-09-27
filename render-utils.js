export function renderGoblin(goober) {
    const newGob = document.createElement('div');
    if (goober.name === 'Cholula'){
        newGob.classList.add('bossgob');
    }
    if (goober.hp < 3) {
        newGob.classList.add('goblinwithsass');
        if (goober.hp === 0) {
            newGob.classList.add('goblinwithsads');
        }
    } else {
        newGob.classList.add('goblinwithclass');
    }
    

    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const gobImage = document.createElement('p');
    
    
    
    
    
    nameEl.textContent = goober.name;
    hpEl.textContent = `HP: ${goober.hp}`;
    

    

    newGob.append(nameEl, gobImage, hpEl);

    return newGob;
}