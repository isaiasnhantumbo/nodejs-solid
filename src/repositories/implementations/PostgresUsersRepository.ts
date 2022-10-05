import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  async save(user: User): Promise<User> {
    this.users.push(user);
    const newUser = this.users.find((u) => u.email === user.email);
    return newUser;
  }
}
