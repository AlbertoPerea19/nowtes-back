import { InjectRepository } from "@nestjs/typeorm";
import { RegisterDto } from "src/application/dto/register.dto";
import { UpdateUserDto } from "src/application/dto/update-user.dto";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";
import { Repository } from "typeorm";

export class UserRepository implements IUserRepository{
   constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
    ){}
    
    async create(registerDto: RegisterDto): Promise<User> {
      const newUser = this.userRepository.create(registerDto);
      return await this.userRepository.save(newUser);
    }
  
    async findAll(): Promise<User[]> {
      return this.userRepository.find();
    }
  
    async findOne(id: string): Promise<User> {
      return this.userRepository.findOne({ where: { id } });
    }
  
    async update(id: string, updateUserDto: UpdateUserDto) {
      return this.userRepository.update(id, updateUserDto);
    }
  
    async remove(id: string): Promise<void> {
      await this.userRepository.delete(id);
    }
  
    async findOneByUsername(username: string): Promise<User>{
      return await this.userRepository.findOne({ where: { username } });
    }

}
