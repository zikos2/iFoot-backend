import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventsController } from './events.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENTS',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  controllers: [EventsController],
})
export class EventsModule {}
