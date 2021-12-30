import {
  Column,
  Entity, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Event, IEvent } from "./event"

@Entity("EventLocation")
export class EventLocation implements IEventLocation {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @OneToOne(() => Event, (e) => e.location)
    event: Event

    @Column({ type: "text", nullable: true })
    worldName?: string

    @Column({ type: "text", nullable: true })
    userId?: string

    @Column({ type: "text", nullable: true })
    sessionUrl?: string
}

export interface IEventLocation {
    id?: number
    event?: IEvent
    worldName?: string
    userId?: string
    sessionUrl? : string
}
