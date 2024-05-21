import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { User } from '../../domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports:[UserService, UserRepository],
})
export class UserModule {}
