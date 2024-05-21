import { Injectable } from '@nestjs/common';
import { UpdateNoteDto } from 'src/application/dto/update-note.dto';
import { CreateNoteUseCase } from 'src/application/use-cases/note/create-note.usecase';
import { FindAllNoteUseCase } from 'src/application/use-cases/note/findAll-note.usecase';
import { FindOneNoteUseCase } from 'src/application/use-cases/note/findOne-note.usecase';
import { RemoveNoteUseCase } from 'src/application/use-cases/note/remove-note.usecase';
import { UpdateNoteUseCase } from 'src/application/use-cases/note/update-note.usercase';
import { NoteRepository } from '../repositories/note.repository';
import { CreateNoteDto } from 'src/application/dto/create-note.dto';

@Injectable()
export class NoteService {
  private createNoteUseCase: CreateNoteUseCase;
  private findAllNoteUseCase: FindAllNoteUseCase;
  private findOneNoteUseCase: FindOneNoteUseCase;
  private removeNoteUseCase: RemoveNoteUseCase;
  private updateNoteUseCase: UpdateNoteUseCase;

  constructor(private readonly noteRepository: NoteRepository) {
    this.createNoteUseCase = new CreateNoteUseCase(noteRepository);
    this.findAllNoteUseCase = new FindAllNoteUseCase(noteRepository);
    this.findOneNoteUseCase = new FindOneNoteUseCase(noteRepository);
    this.removeNoteUseCase = new RemoveNoteUseCase(noteRepository);
    this.updateNoteUseCase = new UpdateNoteUseCase(noteRepository);
  }

  async create(createNoteDto: CreateNoteDto) {
    return await this.createNoteUseCase.create(createNoteDto);
  }

  async findAll() {
    return await this.findAllNoteUseCase.findAll();
  }

  async findOne(id: string) {
    return await this.findOneNoteUseCase.findOne(id);
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    return await this.updateNoteUseCase.update(id, updateNoteDto);
  }

  async remove(id: string) {
    return await this.removeNoteUseCase.remove(id);
  }
}