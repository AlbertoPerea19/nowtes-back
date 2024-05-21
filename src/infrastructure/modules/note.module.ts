import { Module } from '@nestjs/common';
import { NoteController } from '../controllers/note.controller';
import { Note } from '../../domain/entities/note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteService } from '../services/note.service';
import { NoteRepository } from '../repositories/note.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Note])],
  controllers: [NoteController],
  providers: [NoteService, NoteRepository],
  exports: [NoteRepository]
})
export class NoteModule {}
