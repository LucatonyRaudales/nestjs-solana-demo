import { CreateTicketDTO } from './dto/ticket.dto';
import { TicketService } from './ticket.service';
export declare class TicketController {
    private service;
    constructor(service: TicketService);
    createPost(res: any, createTicketDTO: CreateTicketDTO): Promise<any>;
    getTickets(res: any): Promise<any>;
    getTicket(res: any, ticketID: any): Promise<any>;
    deleteTicket(res: any, ticketID: any): Promise<any>;
    updateTicket(res: any, createTicketDTO: CreateTicketDTO, ticketID: any): Promise<any>;
}
