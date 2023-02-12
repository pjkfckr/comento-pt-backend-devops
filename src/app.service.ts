import { Injectable } from '@nestjs/common';
import { AWS_S3 } from './aws/s3/s3.config';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class AppService {
  private readonly S3 = AWS_S3;
  getHello(): string {
    return 'Hello World!';
  }

  upload(file: Express.Multer.File): Promise<string> {
    const fileKey = `${uuidV4()}-${file.filename}`;
    const s3 = this.S3.getInstance();
    const uploadedFile = new Promise<string>((resolve, reject) => {
      s3.upload(
        {
          Bucket: 'comento-bucket-s3',
          Key: fileKey,
          Body: file.buffer,
        },
        (err, data) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(data.Location);
        },
      );
    });
    return uploadedFile;
  }
}
