import { IUserRepository } from "src/domain/repositories/iuser.repository";

export class RemoveUserUseCase {
   constructor(private userRepository: IUserRepository){}

   async remove(id: string){
      return await this.userRepository.remove(id);
   }
   
}