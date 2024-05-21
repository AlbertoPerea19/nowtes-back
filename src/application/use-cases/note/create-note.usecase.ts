import { CreateNoteDto } from "src/application/dto/create-note.dto";
import { Note } from "src/domain/entities/note.entity";
import { INoteRepository } from "src/domain/repositories/inote.repository";

export class CreateNoteUseCase {
   constructor(private noteRepository: INoteRepository){}

   async create(createNoteDto: CreateNoteDto): Promise<Note>{
      return await this.noteRepository.create(createNoteDto);
   }
   
}