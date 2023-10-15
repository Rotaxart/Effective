import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateEventDto } from './dto/create-event.dto';
import { EventFiltersDto } from './dto/event-filters.dto';

@Controller('history')
export class HistoryController {
  constructor(
    @Inject(HistoryService) private readonly historyService: HistoryService,
  ) { }

  @Post('create')
  createEvent(@Body() dto: CreateEventDto) {
    console.log('history');
    return this.historyService.createEvent(dto);
  }

  @Get('get')
  getEvents(@Query() filters: EventFiltersDto) {
    return this.historyService.getEvents(filters);
  }
}
