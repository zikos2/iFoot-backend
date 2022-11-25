import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @MessagePattern({ cmd: 'get_hello' })
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'get_events' })
  getAllEvents() {
    return this.appService.getAllEvents();
  }

  @MessagePattern({ cmd: 'get_event' })
  getEvent(data) {
    console.log('getting event with code ', data.code);
    return this.appService.getEvent(data.code);
  }

  @MessagePattern({ cmd: 'create_events' })
  createEvent(event: Event) {
    return this.appService.createEvent(event);
  }
}
