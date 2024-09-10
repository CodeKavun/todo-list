import { ToDo } from "../models/to-do";
import { TODOS } from "../services/mock-todo";

export class JsonStorage {
    static instance: JsonStorage;

    constructor() { }

    static getInstance(): JsonStorage {
        if (!JsonStorage.instance) {
            JsonStorage.instance = this.prototype;
        }

        return JsonStorage.instance;
    }

    save(todo: ToDo[]): void {
        const data = JSON.stringify(todo);
        localStorage.setItem("todos", data);
    }

    load(): ToDo[] {
        const data: string | null = localStorage.getItem('todos');
        if (data == null) return TODOS;

        return JSON.parse(data || '[]');
    }
}
