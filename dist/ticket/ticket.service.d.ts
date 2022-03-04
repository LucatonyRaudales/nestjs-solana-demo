import { Model } from 'mongoose';
import { TicketInterface } from './interfaces/ticket.interface';
import { CreateTicketDTO } from './dto/ticket.dto';
export declare class TicketService {
    private readonly ticketModel;
    constructor(ticketModel: Model<TicketInterface>);
    getTickets(): Promise<TicketInterface[]>;
    getTicket(ticketID: string): Promise<TicketInterface>;
    insertTicket(createTicketDTO: CreateTicketDTO): Promise<TicketInterface>;
    deleteTicket(ticketID: string): Promise<TicketInterface>;
    updateTicket(ticketID: string, createTicketDTO: CreateTicketDTO): Promise<TicketInterface>;
}
