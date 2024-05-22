// core/usecases/auth/authenticate.usecase.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUserRepository } from '../../../domain/repositories/iuser.repository';
import { LoginDto } from '../../dto/login.dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticateUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login({ username, password }: LoginDto) {
    const user = await this.userRepository.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Invalid username');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { username: user.username };
    const token = await this.jwtService.signAsync(payload);

    return { token, userId: user.id };
  }
}