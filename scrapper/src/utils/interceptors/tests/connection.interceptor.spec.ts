import { ConnectionInterceptor } from '../connection.interceptor';

describe('ConnectionInterceptor', () => {
  describe('intercept', () => {
    it('should put the value into the array if the value is the number', () => {
      const connectionInterceptor = new ConnectionInterceptor();

      const connection = connectionInterceptor.intercept(1);

      expect(connection).toEqual({ connect: [1] });
    });

    it('should wrap the value in the connection object only if the value is the array', () => {
      const connectionInterceptor = new ConnectionInterceptor();

      const connection = connectionInterceptor.intercept([1, 2]);

      expect(connection).toEqual({ connect: [1, 2] });
    });
  });
});
