import { UpdateUserDto } from "src/application/dto/update-user.dto";
import { IUserRepository } from "src/domain/repositories/iuser.repository";

export class UpdateUserUseCase {
   constructor(private userRepository: IUserRepository){}

   async update(id: string, updateUserDto: UpdateUserDto){
      return await this.userRepository.update(id, updateUserDto);
   }
   
}