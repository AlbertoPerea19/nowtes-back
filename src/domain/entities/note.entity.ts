import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Note {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({nullable: false})
   title: string;

   @Column({nullable: false})
   description: string;

   @Column({default: false})
   isCompleted: boolean;

   @Column()
   priority: string;

   @Column()
   deadline: Date;

   @UpdateDateColumn()
   lastModification: Date;

   @Column()
   userId: string;

   @ManyToOne(() => User, user => user.notes, {cascade: true})
   @JoinColumn({name: 'userId'})
   user: User;


}
