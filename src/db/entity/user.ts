import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm"

@Entity("User")
export class User implements IUser {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ type: "text", default: null })
    userId?: string;

    @Column({ type: "text", default: null })
    userName?: string;
}

export interface IUser {
    id? : number
    userId?: string
    userName?: string
}
