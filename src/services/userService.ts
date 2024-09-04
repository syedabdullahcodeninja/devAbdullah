import { User } from "../models/User";

export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      isDisabled: false,
      createdDate: new Date("2023-01-01"),
      updatedDate: new Date("2023-01-01"),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "password456",
      isDisabled: false,
      createdDate: new Date("2023-02-01"),
      updatedDate: new Date("2023-02-01"),
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number | string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: User): User {
    const newUser = {
      ...user,
      id: this.users.length + 1,
      createdDate: new Date(),
      updatedDate: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(
    id: number | string,
    updatedUser: Partial<User>
  ): User | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      const existingUser = this.users[userIndex];
      this.users[userIndex] = {
        ...existingUser,
        ...updatedUser,
        updatedDate: new Date(),
      };
      return this.users[userIndex];
    }
    return undefined;
  }

  deleteUser(id: number | string): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}
