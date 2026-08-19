const taskTitle = document.querySelector('#task-title').value;
const taskDescription = document.querySelector("#task-description").value;

class Todo {
    constructor(title, description, checkbox, project)  {
        this.title = title;
        this.description = description;
        this.checkbox = checkbox;
        this.project = project;
    }
}

export function createAnTodo() {
    const newTodo = new Todo('test', 'lorem ipsun is blasseedd');
    return newTodo
}