import { IsBoolean, IsDate, IsString, MaxLength } from "class-validator";

export class CreateNoteDto {
   @IsString()
   @MaxLength(50)
   title: string;

   @IsString()
   @MaxLength(50)
   description: string;

   @IsString()
   priority: string;

   @IsDate()
   deadline: Date;

   @IsString()
   userId: string;
}
