import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
    ){}

  async register({username, password, profilepic }: RegisterDto){
    const user= await this.userService.findOneByUsername(username);
    if (user) {
      console.log(user)
      throw new BadRequestException("User already exists");
    }
    
    const hashedPassword = await bcryptjs.hash(password, 10);

    await this.userService.create({
      username,
      profilepic,
      password: hashedPassword,
    });

    return {
      message: "User created successfully",
    };
  }

  async login({ username, password }: LoginDto) {
    const user = await this.userService.findOneByUsername(username);

    if (!user) {
      throw new UnauthorizedException("Invalid username");
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    const payload= {username: user.username};
    const token= await this.jwtService.signAsync(payload);

    return {
      token: token,
      username: user.username,
    };
  }
}
