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

    const check = document.createElement('input');
    check.classList.add('checkbox');
    check.type = 'checkbox';

    const description = document.createElement('p');
    description.classList.add('cardDescription');
    //fazer o field project dps

    title.textContent = info.title || '';
    description.textContent = info.description || '';

    if(info.checkbox === true) { 
        headerDiv.append(check) 
    }
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
    const modalToTask = document.querySelector('#task-modal');
    const modalToAlert = document.querySelector('#alert-modal');
    
    const openButton = document.querySelector('.open-modal');
    const deleteAllButton = document.querySelector('.delete-All');
    const saveButton = document.querySelector('.save-task');

    const acceptAlert = document.querySelector('.accept-alert');
    const recuseAlert = document.querySelector('.recuse-alert');

    if(!openButton || !modalToTask) {
        console.warn("Modal or Button not finded");
        return;
    }

    openButton.addEventListener('click', () => {
        modalToTask.showModal();
    });
    deleteAllButton.addEventListener('click', () => {
        modalToAlert.showModal();
    });

    acceptAlert.addEventListener('click', () => {
        localStorage.setItem('savedTODOs', JSON.stringify([]));
        savedTODOs.length = 0;

        main.querySelectorAll('.card').forEach(card => {
            card.remove();
        });

        modalToAlert.close();
    });
    recuseAlert.addEventListener('click', () => {
        modalToAlert.close();
    })

    saveButton.addEventListener('click', () => {
        if(!document.querySelector('#task-title').value || !document.querySelector('#task-description').value) {
            alert("The fields must be filled out to create a TODO");
            return;
        }
        main.append(cardFactory(createAnTodo()));

        const form = document.querySelector('#formCardCreator');
        if(form instanceof HTMLFormElement) {   form.reset()    }
    });
}