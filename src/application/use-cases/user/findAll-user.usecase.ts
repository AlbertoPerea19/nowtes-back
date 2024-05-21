import { IUserRepository } from "src/domain/repositories/iuser.repository";

export class FindAllUserUseCase {
   constructor(private userRepository: IUserRepository){}

   async findAll(){
      return await this.userRepository.findAll();
   }
   
}