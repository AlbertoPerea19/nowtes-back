import { IsBoolean, IsString, MaxLength } from "class-validator";

export class CreateNoteDto {
   @IsString()
   @MaxLength(50)
   title: string;

   @IsString()
   @MaxLength(50)
   description: string;

   @IsString()
   priority: string;

   @IsBoolean()
   deleteAtEndtime: boolean;
}
