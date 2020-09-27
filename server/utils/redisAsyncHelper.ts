import { Multi, RedisClient } from 'redis';

const redisAsyncHelper = (client: RedisClient | Multi) => (key: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (!client.get) {
      return reject(new Error('Redis connection error'));
    }
    client.get(key, (err, value) => {
      if (err) {
        reject(err);
      } else if (!value) {
        reject();
      } else {
        resolve(value);
      }
    });
  });
};

export default redisAsyncHelper;
