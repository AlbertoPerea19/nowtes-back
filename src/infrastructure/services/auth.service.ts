import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/application/dto/login.dto';
import { RegisterDto } from 'src/application/dto/register.dto';
import { AuthenticateUseCase } from 'src/application/use-cases/auth/authenticate.usecase';
import { RegisterUseCase } from 'src/application/use-cases/auth/register.usecase';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class AuthService {
  private registerUseCase: RegisterUseCase;
  private authenticateUseCase: AuthenticateUseCase;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {
    this.registerUseCase = new RegisterUseCase(userRepository);
    this.authenticateUseCase = new AuthenticateUseCase(userRepository, jwtService);
  }

  async register(registerDto: RegisterDto) {
    return await this.registerUseCase.register(registerDto);
  }

  async login(loginDto: LoginDto) {
    return await this.authenticateUseCase.login(loginDto);
  }
}