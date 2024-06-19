import { Module } from '@nestjs/common';
import { SpotsCoreModule } from '@app/core';
import { LugaresController } from './lugares.controller';

@Module({
  imports: [SpotsCoreModule],
  controllers: [LugaresController],
})
export class LugaresModule {}
