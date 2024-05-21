import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from './constants/jwt.constant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService){}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (this.isExcludedRoute(request)) {
      return true;
    }

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }

  private isExcludedRoute(request: Request): boolean {
    const excludedRoutes = [
      { method: 'POST', path: '/auth/register' },
      { method: 'POST', path: '/auth/login' },
    ];

    return excludedRoutes.some(route => route.method === request.method && route.path === request.path);
  }
}
