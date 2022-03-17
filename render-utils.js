export function renderGoblin(goober) {
    const newGob = document.createElement('div');
    newGob.classList.add('goblinwithclass');

    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const gobImage = document.createElement('p');
    gobImage.classList.add('emoji');
    
    
    
    nameEl.textContent = goober.name;
    hpEl.textContent = goober.hp;

    gobImage.textContent = '';
    

    if (goober.hp > 0) {
        gobImage.textContent = '';
    }

    if (goober.hp === 0) {
        gobImage.textContent = '  💥';
    }
    

    newGob.append(nameEl, gobImage, hpEl);

    return newGob;
}