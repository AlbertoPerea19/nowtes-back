import { INoteRepository } from "src/domain/repositories/inote.repository";

export class FindOneNoteUseCase {
   constructor(private noteRepository: INoteRepository){}

   async findOne(id: string){
      return await this.noteRepository.findOne(id);
   }
   
}