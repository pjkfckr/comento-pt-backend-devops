import * as AWS from 'aws-sdk';

export namespace S3Config {

  const INSTANCE = new AWS.S3();

  export function getInstance() {
    return INSTANCE;
  }
}

