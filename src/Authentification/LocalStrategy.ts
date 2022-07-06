import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './Auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(name: number, password: string): Promise<any> {
    const user = await this.authService.validateBook(name, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}