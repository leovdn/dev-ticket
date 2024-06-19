import { Module } from '@nestjs/common';
import { SpotsCoreModule } from '@app/core';

@Module({
  imports: [SpotsCoreModule],
})
export class SpotsModule {}
