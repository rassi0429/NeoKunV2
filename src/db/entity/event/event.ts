import {
  Column,
  Entity, OneToMany, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { EventName, IEventName } from "./eventName"
import { EventLocation, IEventLocation } from "./eventLocation"
import { EventDetail, IEventDetail } from "./eventDetail"
import { EventImage, IEventImage } from "./eventImage"

@Entity("Event")
export class Event implements IEvent {
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

export interface IEvent {
    id?: number
    name: IEventName
    location: IEventLocation
    start?: number
    end?: number
    recurrence?: string
    detail: IEventDetail
    twitterTag?: string
    calenderId?: string
    images?: IEventImage[]
}
