import { CreateUserUseCase } from "./CreateUserUseCase";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { MailtrapMailProvider } from "./../../providers/implementations/MailtrapMailProvider";
import { CreateUserController } from "./CreateUserController";
const mailtrapProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
