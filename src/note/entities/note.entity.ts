import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
   deletedAtEndtime: boolean;

   @Column()
   userId: string;

   @ManyToOne(() => User, user => user.id, {cascade: true})
   @JoinColumn({name: 'userId'})
   user: User;


}
