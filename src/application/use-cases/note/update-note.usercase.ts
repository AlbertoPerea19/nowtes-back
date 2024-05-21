import { UpdateNoteDto } from "src/application/dto/update-note.dto";
import { INoteRepository } from "src/domain/repositories/inote.repository";

export class UpdateNoteUseCase {
   constructor(private noteRepository: INoteRepository){}

   async update(id: string, updateNoteDto: UpdateNoteDto){
      return await this.noteRepository.update(id, updateNoteDto);
   }
   
}