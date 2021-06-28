import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users.module';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule,
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
