import { Controller, Get, Post, Put, Patch, Delete, Body, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest() {
    return { method: 'GET', message: 'CORS test successful' };
  }

  @Post('test')
  postTest(@Body() body: any) {
    return { method: 'POST', received: body };
  }

  @Put('test')
  putTest(@Body() body: any) {
    return { method: 'PUT', received: body };
  }

  @Patch('test')
  patchTest(@Body() body: any) {
    return { method: 'PATCH', received: body };
  }

  @Delete('test')
  deleteTest() {
    return { method: 'DELETE', message: 'Resource deleted' };
  }

  @Get('auth-test')
  authTest(@Headers('authorization') auth: string) {
    return { method: 'GET', authHeader: auth ?? 'none' };
  }
}
