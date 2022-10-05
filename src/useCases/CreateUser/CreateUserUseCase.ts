import { IMailProvider } from './../../providers/IMailProvider';
import { User } from './../../entities/User';
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository,
    private mailProvider:IMailProvider
    ) {}
  async execute(data: ICreateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);
    if(userExists){
        return new Error ("User already exists")
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    console.log(user);
    
    await this.mailProvider.sendMail({
        to:{
            name:data.name,
            email:data.email,
        },
        from:{
            name:'Fidel Kling',
            email:'Wilhelm_Cummerata@example.com'
        },
        subject:'Gorgeous',
        body:`<p>TEste</p>`
    })
  }
}
