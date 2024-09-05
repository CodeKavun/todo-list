export class ToDo {
    id: number = 1;
    title: string = '';
    description: string = '';
    daysToComplete: number = 1;
    priority: number = 1;
    isDone: boolean = false;

    constructor (id: number, title: string, description: string, daysToComplete: number, priority: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.daysToComplete = daysToComplete;
        this.priority = priority;
    }
}
