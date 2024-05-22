import { INoteRepository } from "src/domain/repositories/inote.repository";

export class FindAllByUserIDNoteUseCase {
   constructor(private noteRepository: INoteRepository){}

   async findAllByUserId(userId: string){
      return await this.noteRepository.findAllByUserId(userId);
   }
   
}