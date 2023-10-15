import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { History } from './entities/history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventFiltersDto } from './dto/event-filters.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) { }

  async createEvent({ event, user_id }: CreateEventDto) {
    const newEvent = await this.historyRepository.save({
      event,
      user_id: Number(user_id),
    });
    console.log(newEvent);
    return newEvent;
  }

  async getEvents({ user_id, page = 1, show_by = 10 }: EventFiltersDto) {
    const events = await this.historyRepository.find({
      where: user_id && { user_id: Number(user_id) },
      take: Number(show_by),
      skip: (Number(page) - 1) * Number(show_by),
    });
    return events;
  }
}
