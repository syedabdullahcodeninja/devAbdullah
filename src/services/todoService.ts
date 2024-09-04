import { Todo } from "../models/Todo";

export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: "Buy groceries",
      userId: 1,
      isCompleted: false,
      createdDate: new Date("2023-01-01"),
      updatedDate: new Date("2023-01-01"),
    },
    {
      id: 2,
      title: "Walk the dog",
      userId: 1,
      isCompleted: true,
      createdDate: new Date("2023-01-02"),
      updatedDate: new Date("2023-01-02"),
    },
  ];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number | string): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  createTodo(todo: Todo): Todo {
    const newTodo = {
      ...todo,
      id: this.todos.length + 1,
      createdDate: new Date(),
      updatedDate: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(
    id: number | string,
    updatedTodo: Partial<Todo>
  ): Todo | undefined {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex > -1) {
      const existingTodo = this.todos[todoIndex];
      this.todos[todoIndex] = {
        ...existingTodo,
        ...updatedTodo,
        updatedDate: new Date(),
      };
      return this.todos[todoIndex];
    }
    return undefined;
  }

  deleteTodo(id: number | string): boolean {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
      return true;
    }
    return false;
  }
}
