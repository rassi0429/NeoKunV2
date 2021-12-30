import {
  Column,
  Entity, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Event } from "./event"

@Entity("EventName")
export class EventName {
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
