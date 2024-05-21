import { IUserRepository } from "src/domain/repositories/iuser.repository";

export class FindOneUserUseCase {
   constructor(private userRepository: IUserRepository){}

   async findOne(id: string){
      return await this.userRepository.findOne(id);
   }
   
}