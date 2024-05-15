import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>
  ){}
  
  create(createNoteDto: CreateNoteDto) {
    this.noteRepository.save(createNoteDto);
  }

  findAll() {
    this.noteRepository.find();
  }

  findOne(id: string) {
    return this.noteRepository.findOne({ where: { id } });
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    this.noteRepository.update(id, updateNoteDto);
  }

  remove(id: string) {
    this.noteRepository.delete(id);
  }
}
