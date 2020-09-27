import { Multi, RedisClient } from 'redis';

const redisAsyncHelper = (client: RedisClient | Multi) => (key: string): Promise<string | null> => {
  return new Promise<string | null>((resolve, reject) => {
    if (!client.get) {
      return reject(new Error('Redis connection error'));
    }
    client.get(key, (err, value) => {
      if (err) {
        return reject(err);
      }
      return resolve(value);
    });
  });
};

export default redisAsyncHelper;
