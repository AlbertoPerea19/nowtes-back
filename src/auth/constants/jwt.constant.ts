import { ConfigModule } from '@nestjs/config';

export const jwtConstants = {
    imports: [
        ConfigModule.forRoot()
    ],
    secret: process.env.JWTSECRET,
}