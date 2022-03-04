import { Document } from 'mongoose';
export interface TicketInterface extends Document {
    readonly ticketID: string;
    readonly hash: string;
    readonly createdAt: Date;
}
