import * as AWS from 'aws-sdk';

class S3Config {
  private readonly INSTANCE = AWS.S3;

  getInstance() {
    return this.INSTANCE;
  }
}

export const AWS_S3 = new S3Config();
