export type Task = {
    description: string;
    status: 'TODO' | 'IN_PROGRESS' | 'DONE';
    dueDate: Date;
}