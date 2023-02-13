import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { S3Config } from './aws/s3/s3.config';

@Injectable()
export class AppService {
  private readonly S3Instance = S3Config.getInstance();
  getHello(): string {
    return 'Hello World!';
  }

  upload(file: Express.Multer.File): Promise<string> {
    const fileKey = `${uuidV4()}-${file.filename}`;
    const uploadedFile = new Promise<string>((resolve, reject) => {
      this.S3Instance.upload(
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
