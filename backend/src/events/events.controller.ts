import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('events')
export class EventsController {
  constructor(@Inject('EVENTS') private eventsClient: ClientProxy) {}

  // @Get()
  // getHello(): Observable<string> {
  //   return this.eventsService.getHello();
  // }

  @Get('all')
  getAllEvents() {
    return this.eventsClient.send({ cmd: 'get_events' }, {});
  }

  @Get(':code')
  getEvent(@Param() params) {
    return this.eventsClient.send({ cmd: 'get_event' }, { code: params.code });
  }

  @Post()
  createEvent() {
    return this.eventsClient.send({ cmd: 'create_events' }, {});
  }
}
