import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants/jwt.constant';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';
import { UserModule } from './user.module';
import { AuthService } from '../services/auth.service';

@Module({
  imports:[
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: "1d"},
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
  ],
})
export class AuthModule {}
