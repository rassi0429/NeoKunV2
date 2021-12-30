import {
  Column,
  Entity, OneToMany, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { EventName } from "./eventName"
import { EventLocation } from "./eventLocation"
import { EventDetail } from "./eventDetail"
import { EventImage } from "./eventImage"

@Entity("Event")
export class Event {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @OneToOne(() => EventName, (e) => e.event)
    name: EventName

    @OneToOne(() => EventLocation, (e) => e.event)
    location: EventLocation

    @Column({ type: "integer", nullable: true })
    start?: number

    @Column({ type: "integer", nullable: true })
    end?: number

    @Column({ type: "text", nullable: true })
    recurrence?: string

    @OneToOne(() => EventDetail, (e) => e.event)
    detail: EventDetail

    @Column({ type: "text", nullable: true })
    twitterTag?: string

    @Column({ type: "text", nullable: true })
    calenderId?: string

    @OneToMany(() => EventImage, (e) => e.event)
    images?: EventImage[]
}
