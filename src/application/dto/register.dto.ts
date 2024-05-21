import { Transform } from "class-transformer";
import { IsOptional, IsString, MaxLength } from "class-validator";

export class RegisterDto{
   @IsString()
   @MaxLength(20)
   username: string;

   @IsString()
   @MaxLength(10)
   @Transform(({ value }) => value.trim())
   password: string;

   @IsOptional()
   profilepic: Buffer;

}