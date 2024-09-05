import { User } from "../models/User";

export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: "Syed Abdullah",
      email: "syed.abdullah@example.com",
      password: "password123",
      isDisabled: false,
      createdDate: new Date("2024-09-04"),
      updatedDate: new Date("2024-09-04"),
    },
    {
      id: 2,
      name: "Rana Waqas",
      email: "rana.waqas@example.com",
      password: "password456",
      isDisabled: false,
      createdDate: new Date("2024-09-04"),
      updatedDate: new Date("2024-09-04"),
    },
  ];

  async getAllUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.users), 100);
    });
  }

  async getUserById(id: number | string): Promise<User | undefined> {
    return new Promise((resolve) => {
      const user = this.users.find((user) => user.id === id);
      setTimeout(() => resolve(user), 100);
    });
  }

  async createUser(user: User): Promise<User> {
    return new Promise((resolve) => {
      const newUser = {
        ...user,
        id: this.users.length + 1,
        createdDate: new Date(),
        updatedDate: new Date(),
      };
      this.users.push(newUser);
      setTimeout(() => resolve(newUser), 100);
    });
  }

  async updateUser(
    id: number | string,
    updatedUser: User
  ): Promise<User | undefined> {
    return new Promise((resolve) => {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex > -1) {
        this.users[userIndex] = {
          ...this.users[userIndex],
          ...updatedUser,
          updatedDate: new Date(),
        };
        setTimeout(() => resolve(this.users[userIndex]), 100);
      } else {
        setTimeout(() => resolve(undefined), 100);
      }
    });
  }

  async patchUser(
    id: number | string,
    partialUser: Partial<User>
  ): Promise<User | undefined> {
    return new Promise((resolve) => {
      console.log("Patching user with ID:", id);
      console.log("Partial user data:", partialUser);

      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        console.log("User not found with ID:", id);
        setTimeout(() => resolve(undefined), 100);
        return;
      }

      console.log("User before patch:", this.users[userIndex]);

      this.users[userIndex] = {
        ...this.users[userIndex],
        ...partialUser,
        updatedDate: new Date(),
      };

      console.log("User after patch:", this.users[userIndex]);

      setTimeout(() => resolve(this.users[userIndex]), 100);
    });
  }

  async deleteUser(id: number | string): Promise<boolean> {
    return new Promise((resolve) => {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex > -1) {
        this.users.splice(userIndex, 1);
        setTimeout(() => resolve(true), 100);
      } else {
        setTimeout(() => resolve(false), 100);
      }
    });
  }
}
