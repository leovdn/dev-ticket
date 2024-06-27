import { Module } from '@nestjs/common';
import { EventosController } from './events.controller';
import { EventsCoreModule } from '@app/core/events/events-core.module';

@Module({
  imports: [EventsCoreModule],
  controllers: [EventosController],
})
export class EventsModule {}
