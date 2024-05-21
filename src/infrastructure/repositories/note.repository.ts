import { InjectRepository } from "@nestjs/typeorm";
import { CreateNoteDto } from "src/application/dto/create-note.dto";
import { UpdateNoteDto } from "src/application/dto/update-note.dto";
import { Note } from "src/domain/entities/note.entity";
import { INoteRepository } from "src/domain/repositories/inote.repository";
import { Repository } from "typeorm";

export class NoteRepository implements INoteRepository{
   constructor(
      @InjectRepository(Note)
      private noteRepository: Repository<Note>,
    ) {}
    
   async findAll(): Promise<Note[]> {
      return await this.noteRepository.find();
   }
   async findOne(id: string): Promise<Note> {
      return await this.noteRepository.findOne({ where: { id } });
   }
   async create(createNoteDto: CreateNoteDto): Promise<Note> {
      return this.noteRepository.save(createNoteDto);
   }
   async update(id: string, updateNoteDto: UpdateNoteDto) {
     return this.noteRepository.update(id, updateNoteDto);
   }
   async remove(id: string): Promise<void> {
      await this.noteRepository.delete(id);
   }

}