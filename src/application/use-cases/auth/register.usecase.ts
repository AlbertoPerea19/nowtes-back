import { BadRequestException, Injectable } from "@nestjs/common";
import { RegisterDto } from "src/application/dto/register.dto";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/iuser.repository";
import * as bcryptjs from 'bcryptjs';


@Injectable()
export class RegisterUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async register({ username, password, profilepic }: RegisterDto) {
    const existingUser = await this.userRepository.findOneByUsername(username);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    await this.userRepository.create({ username, password: hashedPassword, profilepic });

    return { message: 'User created successfully' };
  }
}