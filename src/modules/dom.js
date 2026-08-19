import { template } from "./storage.js";

/**
 * criar um modal que permite colcoar informações do card
 * fazer um botão que chame esse modal
 * acessar as informações do modal e criar um objeto com elas
 * criar um loop para ler todos os objetos e expo-los
 * colocar o objeto em um json e pegar objetos do json
 * guardar no localStorage
 * apagar objetos
 * alterar localStorage
 */

const cardConstructor = (info) => {
    const cardTemplate = document.createElement('div');
    cardTemplate.classList.add('card');

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerCard')
    const middleDiv = document.createElement('div');
    middleDiv.classList.add('middleCard');
    const lowerDiv = document.createElement('div');
    lowerDiv.classList.add('lowCard');

    const title = document.createElement('h2');
    title.classList.add('cardTitle');

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox'
    if (template.checkbox[1] === 1) {
        checkbox.checked = true;
    }

    const description = document.createElement('p');
    description.classList.add('cardDescription');
    //fazer o field project dps

    title.textContent = info.title || '';
    description.textContent = info.description || '';

    if(template.checkbox[0] === 1) { headerDiv.append(checkbox) }
    headerDiv.append(title);
    middleDiv.appendChild(description);
    //lowerDiv.appendChild();

    cardTemplate.append(headerDiv, middleDiv, lowerDiv);
    return cardTemplate;
}

export function loadScreen() {
    const main = document.querySelector('.main');
    let defCard = cardConstructor(template);
    if(!main) {console.warn('.main element is not found'); return;}
    main.appendChild(defCard);
}

export function modalSetup() {
    const modal = document.querySelector('#task-modal');
    const openButton = document.querySelector('.open-modal');

    if(!openButton || !modal) {
        console.warn("Modal or Button not finded");
        return;
    }

    openButton.addEventListener('click', () => {
        modal.showModal();
    });
}