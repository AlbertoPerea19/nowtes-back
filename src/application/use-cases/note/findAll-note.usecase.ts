import { INoteRepository } from "src/domain/repositories/inote.repository";

export class FindAllNoteUseCase {
   constructor(private noteRepository: INoteRepository){}

   async findAll(){
      return await this.noteRepository.findAll();
   }
   
}