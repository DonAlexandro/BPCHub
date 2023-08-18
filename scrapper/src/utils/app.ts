import { RequestTimeoutException } from '@nestjs/common';

export async function withTimeout<R>(promise: Promise<any>, timeout: number): Promise<R> {
  let timeoutId: NodeJS.Timeout;

  // Create a new promise that combines the main promise and timeout
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject(new RequestTimeoutException('Timeout error'));
    }, timeout);
  });

  // Use Promise.race() to race between the main promise and the timeout promise
  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    clearTimeout(timeoutId); // Cancel the timer after the end of the kneading or timeout
  }
}
