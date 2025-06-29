export interface ITask {
  id: number;
  text: string;
  completed: boolean;
  min: number | string;
  sec: number | string;
  createdAt: Date | number;
}

export interface IContext {
  addTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
  getTasks: () => ITask[];
  toggleTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
  clearCompleted: () => void;
}
