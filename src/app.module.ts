import { Module } from '@nestjs/common';
import { NoteModule } from './infrastructure/modules/note.module';
import { UserModule } from './infrastructure/modules/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './infrastructure/modules/auth.module';
import { DatabaseModule } from './infrastructure/modules/database.module';

@Module({
  imports: [
    NoteModule, 
    UserModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    AuthModule,
  ],
})
export class AppModule {}
