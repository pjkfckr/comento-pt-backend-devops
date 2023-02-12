import { Injectable } from '@nestjs/common';
import { AWS_S3 } from './aws/s3/s3.config';

@Injectable()
export class AppService {
  private readonly S3 = AWS_S3;
  getHello(): string {

    return 'Hello World!';
  }

  getS3(): string {
    const s3 = this.S3.getInstance();
    console.log(s3.config);
    return 'Hello S3';
  }
}
