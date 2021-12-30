import {
  Column,
  Entity, ManyToOne, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Event, IEvent } from "./event"

@Entity("EventImage")
export class EventImage implements IEventImage {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @ManyToOne(() => Event, (e) => e.images)
    event: Event

    @Column({ type: "text", nullable: false })
    url: string
}

export interface IEventImage {
    id?: number
    event?: IEvent
    url: string
}
