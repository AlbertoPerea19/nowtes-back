import { RegisterDto } from "src/application/dto/register.dto";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

export class CreateUserUseCase {
   constructor(private userRepository: IUserRepository){}

   async create(registerDto: RegisterDto): Promise<User>{
      return await this.userRepository.create(registerDto);
   }
   
}