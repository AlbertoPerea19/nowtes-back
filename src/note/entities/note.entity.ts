import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({nullable: false, length:50})
   title: string;

   @Column({nullable: false, length:50})
   description: string;

   @Column({default: false})
   isCompleted: boolean;

   @Column()
   priority: string;

   @Column()
   deletedAtEndtime: boolean;
}
