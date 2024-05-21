import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UpdateUserDto } from '../../application/dto/update-user.dto';
import { RegisterDto } from 'src/application/dto/register.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() registerDto: RegisterDto) {
    return this.userService.create(registerDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
