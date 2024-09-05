import { Todo } from "../models/Todo";

export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: "Buy groceries",
      userId: 1,
      isCompleted: false,
      createdDate: new Date("2024-09-04"),
      updatedDate: new Date("2024-09-04"),
    },
    {
      id: 2,
      title: "Walk the dog",
      userId: 1,
      isCompleted: true,
      createdDate: new Date("2024-09-04"),
      updatedDate: new Date("2024-09-04"),
    },
  ];

  async getAllTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.todos), 100);
    });
  }

  async getAllTodosByUserId(userId: number): Promise<Todo[]> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const userTodos = this.todos.filter((todo) => todo.userId === userId);
          resolve(userTodos);
        }, 100);
      });
    } catch (error) {
      console.error('Error fetching todos by user ID:', error);
      throw new Error('Failed to fetch todos by user ID');
    }
  }

  async getTodoByUserId(userId: number, todoId: number): Promise<Todo | undefined> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const todo = this.todos.find(
            (todo) => todo.id === todoId && todo.userId === userId
          );
          resolve(todo);
        }, 100);
      });
    } catch (error) {
      console.error('Error fetching todo by user ID:', error);
      throw new Error('Failed to fetch todo by user ID');
    }
  }
  
  async getTodoById(id: number): Promise<Todo | undefined> {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const todo = this.todos.find((todo) => todo.id === id);
          resolve(todo);
        }, 100);
      });
    } catch (error) {
      console.error('Error fetching todo by ID:', error);
      throw new Error('Failed to fetch todo by ID');
    }
  }
  async createTodo(todo: Todo): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo = {
          ...todo,
          id: this.todos.length + 1,
          createdDate: new Date(),
          updatedDate: new Date(),
        };
        this.todos.push(newTodo);
        resolve(newTodo);
      }, 100);
    });
  }

  async updateTodo(
    id: number | string,
    updatedTodo: Partial<Todo>
  ): Promise<Todo | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex > -1) {
          const existingTodo = this.todos[todoIndex];
          this.todos[todoIndex] = {
            ...existingTodo,
            ...updatedTodo,
            updatedDate: new Date(),
          };
          resolve(this.todos[todoIndex]);
        } else {
          resolve(undefined);
        }
      }, 100);
    });
  }

  async deleteTodo(id: number | string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex > -1) {
          this.todos.splice(todoIndex, 1);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 100);
    });
  }
}
