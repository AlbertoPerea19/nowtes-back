import { Transform } from "class-transformer";
import { IsString } from "class-validator";

export class LoginDto {
   @IsString()
   username: string;

   @IsString()
   @Transform(({ value }) => value.trim())
   password: string;
}
