import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateTicketDTO } from './dto/ticket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private service: TicketService) {}

  @Post('')
  async createPost(@Res() res, @Body() createTicketDTO: CreateTicketDTO) {
    const ticket = await this.service.insertTicket(createTicketDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Ticket inserted', data: ticket });
  }

  @Get('')
  async getTickets(@Res() res) {
    const tickets = await this.service.getTickets();
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Tickets list', data: tickets });
  }

  @Get('/:ticketID')
  async getTicket(@Res() res, @Param('ticketID') ticketID) {
    const ticket = await this.service.getTicket(ticketID);
    if (!ticket)
      throw new NotFoundException('Ticket does not exist ' + ticketID);
    return res.status(HttpStatus.OK).json({ message: 'Ticket', data: ticket });
  }

  @Delete('/:ticketID')
  async deleteTicket(@Res() res, @Param('ticketID') ticketID) {
    const ticketDeleted = await this.service.deleteTicket(ticketID);
    if (!ticketDeleted)
      throw new NotFoundException('Ticket does not exist ' + ticketID);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'ticket deleted', data: ticketDeleted });
  }

  @Put('')
  async updateTicket(
    @Res() res,
    @Body() createTicketDTO: CreateTicketDTO,
    @Query('ticketID') ticketID,
  ) {
    const ticketUpdated = await this.service.updateTicket(
      ticketID,
      createTicketDTO,
    );
    if (!ticketUpdated)
      throw new NotFoundException('Ticket does not exist ' + ticketID);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'ticket updated', data: ticketUpdated });
  }
}
