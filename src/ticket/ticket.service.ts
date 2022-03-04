import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TicketInterface } from './interfaces/ticket.interface';
import { CreateTicketDTO } from './dto/ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel('Ticket') private readonly ticketModel: Model<TicketInterface>,
  ) {}

  async getTickets(): Promise<TicketInterface[]> {
    const tickets = await this.ticketModel.find();
    return tickets;
  }

  async getTicket(ticketID: string): Promise<TicketInterface> {
    const ticket = await this.ticketModel.findOne({ ticketID });
    return ticket;
  }

  async insertTicket(
    createTicketDTO: CreateTicketDTO,
  ): Promise<TicketInterface> {
    const ticket = new this.ticketModel(createTicketDTO);
    return await ticket.save();
  }

  async deleteTicket(ticketID: string): Promise<TicketInterface> {
    const ticketDeleted = await this.ticketModel.findByIdAndDelete(ticketID);
    return ticketDeleted;
  }

  async updateTicket(
    ticketID: string,
    createTicketDTO: CreateTicketDTO,
  ): Promise<TicketInterface> {
    const ticketUpdated = await this.ticketModel.findByIdAndUpdate(
      ticketID,
      createTicketDTO,
      { new: true },
    );
    return ticketUpdated;
  }
}
