import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/application/dto/register.dto';
import { UpdateUserDto } from 'src/application/dto/update-user.dto';
import { CreateUserUseCase } from 'src/application/use-cases/user/create-user.usecase';
import { FindAllUserUseCase } from 'src/application/use-cases/user/findAll-user.usecase';
import { FindOneUserUseCase } from 'src/application/use-cases/user/findOne-user.usecase';
import { FindUsernameUseCase } from 'src/application/use-cases/user/findUsername-user.usecase';
import { RemoveUserUseCase } from 'src/application/use-cases/user/remove-user.usecase';
import { UpdateUserUseCase } from 'src/application/use-cases/user/update-user.usercase';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  private createUserUseCase: CreateUserUseCase;
  private findAllUserUseCase: FindAllUserUseCase;
  private findOneUserUseCase: FindOneUserUseCase;
  private findUsernameUseCase: FindUsernameUseCase;
  private removeUserUseCase: RemoveUserUseCase;
  private updateUserUseCase: UpdateUserUseCase;

  constructor(private readonly userRepository: UserRepository) {
    this.createUserUseCase = new CreateUserUseCase(userRepository);
    this.findAllUserUseCase = new FindAllUserUseCase(userRepository);
    this.findOneUserUseCase = new FindOneUserUseCase(userRepository);
    this.findUsernameUseCase = new FindUsernameUseCase(userRepository);
    this.removeUserUseCase = new RemoveUserUseCase(userRepository);
    this.updateUserUseCase = new UpdateUserUseCase(userRepository);
  }

  async create(registerDto: RegisterDto) {
    return await this.createUserUseCase.create(registerDto);
  }

  async findAll() {
    return await this.findAllUserUseCase.findAll();
  }

  async findOne(id: string) {
    return await this.findOneUserUseCase.findOne(id);
  }

  async findByUsername(username: string) {
    return await this.findUsernameUseCase.findOneByUsername(username);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.updateUserUseCase.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.removeUserUseCase.remove(id);
  }
}