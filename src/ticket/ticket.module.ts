import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ticketSchema } from './schemas/ticket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ticket', schema: ticketSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
