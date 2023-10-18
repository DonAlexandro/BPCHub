import { Connect } from 'src/shared/types';

export function Connection(target: any, key: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = async function (...args: any[]): Promise<Connect> {
    // Call the original method and store its return value
    const result = await method.apply(this, args);

    if (typeof result === 'number') {
      return { connect: [result] };
    }

    const resultArrayContainsNumbers = Array.isArray(result) && result.every((item) => typeof item === 'number');

    if (resultArrayContainsNumbers) {
      return { connect: result };
    }
  };

  return descriptor;
}
