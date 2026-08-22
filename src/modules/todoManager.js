import { savedTODOs } from "./storage.js";

class Todo {
    constructor(title, description, checkbox, project)  {
        this.title = title;
        this.description = description;
        this.checkbox = checkbox;
        this.project = project;
    }
}

export function createAnTodo() {
    const taskTitle = document.querySelector('#task-title').value;
    const taskDescription = document.querySelector("#task-description").value;  
    const thereCheckbox = document.querySelector('#thereCheckbox').checked;

    if(!taskTitle || !taskDescription) {
        console.warn('Title field or description fild is not defined');
        return;
    }
    const newTodo = new Todo(taskTitle, taskDescription, thereCheckbox);
    savedTODOs.push(newTodo);
    localStorage.setItem('savedTODOs', JSON.stringify(savedTODOs));
    return newTodo;
}