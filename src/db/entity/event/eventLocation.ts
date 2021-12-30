import {
  Column,
  Entity, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Event } from "./event"

@Entity("EventLocation")
export class EventLocation {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @OneToOne(() => Event, (e) => e.location)
    event: Event

    @Column({ type: "text", nullable: true })
    text?: string

    @Column({ type: "text", nullable: true })
    userId?: string

    @Column({ type: "text", nullable: true })
    sessionUrl?: string
}
