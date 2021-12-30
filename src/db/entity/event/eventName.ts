import {
  Column,
  Entity, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Event, IEvent } from "./event"

@Entity("EventName")
export class EventName implements IEventName {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @OneToOne(() => Event, (e) => e.name)
    event: Event

    @Column({ type: "text", nullable: true })
    ja?: string

    @Column({ type: "text", nullable: true })
    en?: string

    @Column({ type: "text", nullable: true })
    ko?: string
}

export interface IEventName {
    id?: number
    event?: IEvent
    ja?: string
    en?: string
    ko?: string
}
