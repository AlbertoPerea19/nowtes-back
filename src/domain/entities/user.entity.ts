import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Note } from "./note.entity";

@Entity()
export class User {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({nullable: false})
   username: string;

   @Column({nullable: false})
   password: string;

   @Column({type: 'blob', nullable: true})
   profilepic: Buffer;

   @OneToMany(() => Note, note => note.user)
   notes: Note[];

}
