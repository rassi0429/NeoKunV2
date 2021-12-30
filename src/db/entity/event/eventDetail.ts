import {
  Column,
  Entity, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Event, IEvent } from "./event"

@Entity("EventDetail")
export class EventDetail implements IEventDetail {
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

export class IEventDetail {
    id?: number
    event?: IEvent
    ja?: string
    en?: string
    ko?: string
}
