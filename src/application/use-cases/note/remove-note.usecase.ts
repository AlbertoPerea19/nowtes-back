import { INoteRepository } from "src/domain/repositories/inote.repository";

export class RemoveNoteUseCase {
   constructor(private noteRepository: INoteRepository){}

   async remove(id: string){
      return await this.noteRepository.remove(id);
   }
   
}