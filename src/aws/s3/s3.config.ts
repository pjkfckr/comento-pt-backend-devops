import * as AWS from 'aws-sdk';

class S3Config {
  getInstance() {
    return new AWS.S3();
  }
}

export const AWS_S3 = new S3Config();
