import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TicketModule,
    MongooseModule.forRoot(
      'mongodb+srv://lucatonny:lucatonny98@cluster0.sq93c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
