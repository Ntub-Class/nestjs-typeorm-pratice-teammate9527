import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconﬁg from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconﬁg)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
