import { Connection } from '../connection.decorator';

describe('Connection', () => {
  it('should put the value into the array if the value is the number', async () => {
    class Test {
      @Connection
      async getValue() {
        return 1;
      }
    }

    const test = new Test();
    const value = await test.getValue();

    expect(value).toEqual({ connect: [1] });
  });

  it('should wrap the value in the connection object only if the value is the array', async () => {
    class Test {
      @Connection
      async getValue() {
        return [1, 2];
      }
    }

    const test = new Test();
    const value = await test.getValue();

    expect(value).toEqual({ connect: [1, 2] });
  });
});
