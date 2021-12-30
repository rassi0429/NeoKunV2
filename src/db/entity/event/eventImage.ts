import {
  Column,
  Entity, ManyToOne, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Event } from "./event"

@Entity("EventImage")
export class EventImage {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @ManyToOne(() => Event, (e) => e.images)
    event: Event

    @Column({ type: "text", nullable: false })
    url: string
}
