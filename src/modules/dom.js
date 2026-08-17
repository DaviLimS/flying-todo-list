import { template } from "./storage.js";

const cardConstructor = (info) => {
    const cardTemplate = document.createElement('div');
    cardTemplate.classList.add('card');
    const title = document.createElement('h2');
    //Fazer checkbox depois
    const description = document.createElement('p');
    //fazer o field project dps

    title.textContent = info.title || '';
    description.textContent = info.description || '';

    cardTemplate.appendChild(title, description);
}
const main = document.querySelector('.main');

export function loadScreen() {
    let defCard = cardConstructor(template);
    main.append(defCard);
}