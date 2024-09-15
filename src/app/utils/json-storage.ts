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

    save(data: any[], key: string): void {
        const json = JSON.stringify(data);
        localStorage.setItem(key, json);
    }

    load(key: string, dataOnNull: any[]): ToDo[] {
        const data: string | null = localStorage.getItem(key);
        if (data == null) return dataOnNull;

        return JSON.parse(data || '[]');
    }
}
