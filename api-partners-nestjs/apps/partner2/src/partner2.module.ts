import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './eventos/events.module';
import { LugaresModule } from './lugares/lugares.module';
import { PrismaModule } from '@app/core/prisma/prisma-core.module';
import { AuthModule } from '@app/core/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partner2', isGlobal: true }),
    PrismaModule,
    AuthModule,
    EventsModule,
    LugaresModule,
  ],
})
export class Partner2Module {}
