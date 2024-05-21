import { RegisterDto } from "../../application/dto/register.dto";
import { UpdateUserDto } from "../../application/dto/update-user.dto";
import { User } from "../entities/user.entity";

export interface IUserRepository {
   findAll(): Promise<User[]>;
   findOne(id: string): Promise<User | null>;
   create(registerDto: RegisterDto): Promise<User>;
   update(id: string, updateUserDto: UpdateUserDto);
   remove(id: string): Promise<void>;
   findOneByUsername(username: string): Promise<User>;
 }