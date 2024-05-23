export type Tasks = {[id: string]: Task}

export type Task = {
  description: string
  status: Status
  dueDate: string
}

export enum Status {
  TODO = 'To do',
  IN_PROGRESS = 'In progress',
  DONE = 'Done',
}
