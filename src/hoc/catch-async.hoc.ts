import { BadRequestException } from '@nestjs/common';

async function handleAsyncOperation<T>(operation: Promise<T>): Promise<T> {
  try {
    return await operation;
  } catch (err) {
    console.log(err);
    throw new BadRequestException(err);
  }
}
export default handleAsyncOperation;
