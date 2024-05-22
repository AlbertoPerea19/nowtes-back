import { CreateNoteDto } from "../../application/dto/create-note.dto";
import { UpdateNoteDto } from "../../application/dto/update-note.dto";
import { Note } from "../entities/note.entity";

export interface INoteRepository {
  findAll(): Promise<Note[]>;
  findAllByUserId(userId: string): Promise<Note[]>;
  findOne(id: string): Promise<Note | null>;
  create(createNoteDto: CreateNoteDto): Promise<Note>;
  update(id: string, updateNoteDto: UpdateNoteDto);
  remove(id: string): Promise<void>;
}