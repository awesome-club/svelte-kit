export enum TaskStatus {
  ToDo, Progress, Done
}

export interface TaskDto {
  id: number;
  title: string;
  description: string;
  estimation?: number;
  status?: TaskStatus;
}

export const DefaultTask = {
  id: 0,
  title: "Default Task", 
  description: "Default description", 
  estimation: 1,
  status: TaskStatus.ToDo
}

export const DemoTaskOne = {
  id: 1,
  title: "First task", 
  description: "A random description", 
  estimation: 15,
  status: TaskStatus.ToDo
}

export const DemoTaskTwo = {
  title: "Second task", 
  id: 2,
  description: "A random longer description", 
  estimation: 25,
  status: TaskStatus.ToDo
}

export const DemoTaskThree = {
  title: "Third task",
  id: 3, 
  description: "A random very long description", 
  estimation: 5,
  status: TaskStatus.ToDo
}

const DefaultTasks = [DemoTaskOne, DemoTaskTwo];

export function fetchTasks(): Promise<TaskDto[]> {
  return Promise.resolve(DefaultTasks);
}