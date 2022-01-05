import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { request } from 'express';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalGuard)
  @Post('login')
  login(@Request() req): any{
    return {msg: 'Logged in!'};
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
