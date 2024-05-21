import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

export class FindUsernameUseCase {
   constructor(private userRepository: IUserRepository){}

   async findOneByUsername(username: string): Promise<User>{
      return await this.userRepository.findOneByUsername(username);
   }
   
}