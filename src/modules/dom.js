import { template } from "./storage.js";

const cardConstructor = (info) => {
    const cardTemplate = document.createElement('div');
    cardTemplate.classList.add('card');

    const headerDiv = document.createElement('div');
    headerDiv.classList.classList.add('headerCard')
    const middleDiv = document.createElement('div');
    middleDiv.classList.add('middleCard');
    const lowerDiv = document.createElement('div');
    lowerDiv.classList.add('lowCard');

    const title = document.createElement('h2');
    title.classList.add('cardTitle');
    //Fazer checkbox depois
    const description = document.createElement('p');
    description.classList.add('cardDescription');
    //fazer o field project dps

    title.textContent = info.title || '';
    description.textContent = info.description || '';

    headerDiv.appendChild(title);
    middleDiv.appendChild(description);
    //lowerDiv.appendChild();

    cardTemplate.append(headerDiv, middleDiv, lowerDiv);
    return cardTemplate;
}
const main = document.querySelector('.main');

export function loadScreen() {
    let defCard = cardConstructor(template);
    if(!main) {console.warn('.main element is not found'); return;}
    main.appendChild(defCard);
}