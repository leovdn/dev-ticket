import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsCoreModule } from '@app/core/events/events-core.module';

@Module({
  imports: [EventsCoreModule],
  controllers: [EventsController],
})
export class EventsModule {}
