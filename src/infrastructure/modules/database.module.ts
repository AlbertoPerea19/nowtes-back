import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/domain/entities/note.entity';
import { User } from 'src/domain/entities/user.entity';


@Module({
  imports: [
   ConfigModule.forRoot(),
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [User, Note],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}