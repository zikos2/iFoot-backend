import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { Event } from './event.entity';

@Injectable()
export class AppService {
  events: Event[] = [
    {
      code: 'qwd',
      title: 'Match nadii',
      pitch: 'tiran dl homa',
      nbrPlayers: 12,
      date: new Date(),
      description: 'l match aykon zahii',
      city: 'Marrakech',
      zone: 'azli',
    },
  ];

  getHello(): string {
    return 'Hello from the micro event service World!';
  }

  getAllEvents() {
    return this.events;
  }

  getEvent(code: string) {
    console.log(code);
    return this.events.find((event) => event.code === code);
  }

  createEvent(event) {
    this.events.push(event);
  }
}
