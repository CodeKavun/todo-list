import { ToDo } from "./to-do";

export class Project {
    title: string = '';
    todoList: ToDo[] = [];

    constructor (title: string) {
        this.title = title;
    }
}
