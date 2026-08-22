import { savedTODOs } from "./storage.js";
import { createAnTodo } from "./todoManager.js";

/**
 * apagar objetos
 */
const main = document.querySelector('.main');

const cardFactory = (info) => {
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
    if (info.checkbox[1] === 1) {   checkbox.checked = true;    }

    const description = document.createElement('p');
    description.classList.add('cardDescription');
    //fazer o field project dps

    title.textContent = info.title || '';
    description.textContent = info.description || '';

    if(info.checkbox[0] === 1) { headerDiv.append(checkbox) }
    headerDiv.append(title);
    middleDiv.appendChild(description);
    //lowerDiv.appendChild();

    cardTemplate.append(headerDiv, middleDiv, lowerDiv);
    return cardTemplate;
}

export function loadScreen() {
    const todos = JSON.parse(localStorage.getItem('savedTODOs'))

    if(todos) {
        todos.forEach(todo => {
            if(!todo) {
                return;
            }
            const card = cardFactory(todo);
            main.appendChild(card);
        })
    }
    else {
        savedTODOs.forEach(todo => {
            const card = cardFactory(todo);
            main.appendChild(card);
        })
    }
}

export function modalSetup() {
    const modal = document.querySelector('#task-modal');
    const openButton = document.querySelector('.open-modal');
    const saveButton = document.querySelector('.save-task');

    if(!openButton || !modal) {
        console.warn("Modal or Button not finded");
        return;
    }

    openButton.addEventListener('click', () => {
        modal.showModal();
    });
    saveButton.addEventListener('click', () => {
        if(!document.querySelector('#task-title').value || !document.querySelector('#task-description').value) {
            alert("The fields must be filled out to create a TODO");
            return;
        }
        main.append(cardFactory(createAnTodo()));
    });
}