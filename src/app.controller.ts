import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('s3')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile('file') file: Express.Multer.File): Promise<string> {
    return this.appService.upload(file);
  }
}
