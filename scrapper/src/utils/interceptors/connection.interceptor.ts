import { Injectable } from '@nestjs/common';

// This is the interceptor for services, that's why it doesn't fully follow the documentation
@Injectable()
export class ConnectionInterceptor {
  intercept(value: number | number[]) {
    if (value) {
      if (typeof value === 'number') {
        return { connect: [value] };
      }

      const valueArrayContainsNumbers = Array.isArray(value) && value.every((item) => typeof item === 'number');

      if (valueArrayContainsNumbers) {
        return { connect: value };
      }
    }

    return { connect: [] };
  }
}
